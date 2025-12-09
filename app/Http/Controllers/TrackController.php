<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Track;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Str;

class TrackController extends Controller
{
    public function index()
    {
        $tracks = Track::where('is_visible', true)->get();
        return Inertia::render('Tracks/Index', [
            'tracks' => $tracks,
        ]);
    }

    public function create()
    {
        return Inertia::render('Tracks/Create');
    }

    public function store(Request $request)
    {

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'artist' => 'required|string|max:255',
            'image' => 'nullable|image|max:20480',
            'music' => 'required|file|mimes:mp3,wav,flac|max:20480',
        ]);

        $slug = 'trk-' . Str::uuid();
        $imagePath =  $request->image->storeAs('tracks/images', $slug . '.' . $request->image->extension(), 'public');
        $musicPath = $request->music->storeAs('tracks/music', $slug . '.' . $request->music->extension(), 'public');

        Track::create([
            'slug' => $slug,
            'title' => $validated['title'],
            'artist' => $validated['artist'],
            'image' => $imagePath,
            'audio' => $musicPath,
            'is_visible' => true,
        ]);

        return redirect()->route('tracks.index')->with('success', 'Track created successfully.');
    }

    public function edit(Track $track)
    {
        return Inertia::render('Tracks/Edit', [
            'track' => $track,
        ]);
    }

    public function update(Request $request, Track $track)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'artist' => 'required|string|max:255',
        ]);

        $track->title = $validated['title'];
        $track->artist = $validated['artist'];

        $track->save();

        return redirect()->route('tracks.index')->with('success', 'Track updated successfully.');
    }

    public function destroy(Track $track)
    {
        Storage::delete([$track->image, $track->audio]);
        $track->delete();
        return redirect()->route('tracks.index')->with('success', 'Track deleted successfully.');
    }
}
