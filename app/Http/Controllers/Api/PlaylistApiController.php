<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\PlaylistResource;
use App\Models\Playlist;
use Illuminate\Http\Request;

class PlaylistApiController extends Controller
{
    /**
     * Get all playlists for the authenticated user with their tracks.
     */
    public function index(Request $request)
    {
        $playlists = Playlist::where('user_id', $request->user()->id)
            ->with('tracks:id,slug,title,artist')
            ->get();

        return response()->json([
            'success' => true,
            'data' => PlaylistResource::collection($playlists),
        ]);
    }
}
