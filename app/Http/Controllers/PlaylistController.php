<?php

namespace App\Http\Controllers;

use App\Events\PlaylistUpdated;
use App\Http\Requests\PlaylistRequest;
use Illuminate\Http\Request;
use App\Models\Playlist;
use App\Models\Track;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Inertia\Inertia;
use Illuminate\Support\Str;

class PlaylistController extends Controller
{
    use AuthorizesRequests;

    public function index()
    {
        $playlists = Playlist::with([
                'user:id,name',
                'tracks:id,title,artist'
            ])
            ->withCount('tracks')
            ->get()
            ->map(function ($playlist) {
                return [
                    'id' => $playlist->id,
                    'slug' => $playlist->slug,
                    'title' => $playlist->title,
                    'user_id' => $playlist->user_id,
                    'user' => $playlist->user,
                    'tracks' => $playlist->tracks,
                    'tracks_count' => $playlist->tracks_count,
                ];
            });

        return Inertia::render('Playlists/Index', [
            'playlists' => $playlists,
        ]);
    }

    public function create()
    {
        $tracks = Track::where('is_visible', true)->get();
        return Inertia::render('Playlists/Create', [
            'tracks' => $tracks,
        ]);
    }

    public function store(PlaylistRequest $request)
    {
        $validated = $request->validated();

        // get tracks by slugs
        $tracks = Track::whereIn('slug', $validated['tracks'])->where('is_visible', true)->get();

        if (count($validated['tracks']) !== $tracks->count()) {
            return redirect()->back()->withErrors(['tracks' => 'One or more selected tracks are invalid.'])->withInput();
        }

        $slug = 'ply-' . Str::uuid();

        $playlist = Playlist::create([
            'slug' => $slug,
            'user_id' => Auth::user()->id,
            'title' => $validated['title'],
        ]);
        
        if (!empty($validated['tracks'])) {
            $playlist->tracks()->attach($tracks->pluck('id')->toArray());  
        }

        return redirect()->route('playlists.index')->with('success', 'Playlist created successfully.');
    }

    public function edit(Playlist $playlist)
    {
        // Authorize that the user owns this playlist
        $this->authorize('update', $playlist);

        $playlist->load('tracks');
        $tracks = Track::where('is_visible', true)->get();
        
        return Inertia::render('Playlists/Edit', [
            'playlist' => $playlist->load('tracks'),
            'tracks' => $tracks,
        ]);
    }

    public function update(PlaylistRequest $request, Playlist $playlist)
    {
        // Authorize that the user owns this playlist
        $this->authorize('update', $playlist);

        $tracks = Track::whereIn('slug', $request->input('tracks'))->where('is_visible', true)->get();

        $playlist->title = $request->input('title');
        $playlist->save();
        $playlist->tracks()->sync($tracks->pluck('id'));
        $playlist->touch();

        PlaylistUpdated::dispatch($playlist);

        return redirect()->route('playlists.index')->with('success', 'Playlist updated successfully.');
    }

    public function destroy(Playlist $playlist)
    {
        // Authorize that the user owns this playlist
        $this->authorize('delete', $playlist);

        $playlist->delete();
        return redirect()->route('playlists.index')->with('success', 'Playlist deleted successfully.');
    }
}
