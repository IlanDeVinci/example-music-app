<?php

use App\Http\Controllers\ApiKeyController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PlaylistController;
use App\Http\Controllers\TrackController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use App\Http\Middleware\IsAdmin;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::get('dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('test', [HomeController::class, 'test'])->name('test');


// Tracks
Route::prefix('tracks')->name('tracks.')->group(function () {
    Route::get('/', [TrackController::class, 'index'])->name('index');
    
    Route::middleware([IsAdmin::class])->group(function () {
        Route::get('/create', [TrackController::class, 'create'])->name('create');
        Route::post('/', [TrackController::class, 'store'])->name('store');
        Route::get('/{track}/edit', [TrackController::class, 'edit'])->name('edit');
        Route::put('/{track}', [TrackController::class, 'update'])->name('update');
        Route::delete('/{track}', [TrackController::class, 'destroy'])->name('destroy');
    });
});

// Playlist
Route::get('playlists', [PlaylistController::class, 'index'])->name('playlists.index');
Route::resource('playlists', PlaylistController::class)->except(['show', 'index'])->middleware(['auth']);
Route::resource('api-keys', ApiKeyController::class)->except(['show'])->middleware(['auth']);

/*
Route::prefix('playlists')->name('playlists.')->middleware(['auth'])->group(function () {
    Route::get('/', [PlaylistController::class, 'index'])->name('index');
    Route::get('/create', [PlaylistController::class, 'create'])->name('create');
    Route::post('/', [PlaylistController::class, 'store'])->name('store');
    Route::get('/{playlist}/edit', [PlaylistController::class, 'edit'])->name('edit');
    Route::put('/{playlist}', [PlaylistController::class, 'update'])->name('update');
    Route::delete('/{playlist}', [PlaylistController::class, 'destroy'])->name('destroy');
});
*/
require __DIR__.'/settings.php';

