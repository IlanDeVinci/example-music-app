<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Track;
use Inertia\Inertia;

class TrackController extends Controller
{
    public function index()
    {
        $tracks = Track::where('is_visible', true)->get();
        return Inertia::render('Tracks/Index', [
            'tracks' => $tracks,
        ]);
    }
}
