<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\TrackController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::get('dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('test', [HomeController::class, 'test'])->name('test');

Route::prefix('tracks')->name('tracks.')->group(function () {
    Route::get('/', [TrackController::class, 'index'])->name('index');
    Route::get('/create', [TrackController::class, 'create'])->name('create');
    Route::post('/', [TrackController::class, 'store'])->name('store');
    Route::get('/{track}/edit', [TrackController::class, 'edit'])->name('edit');
    Route::put('/{track}', [TrackController::class, 'update'])->name('update');
    Route::delete('/{track}', [TrackController::class, 'destroy'])->name('destroy');
});

require __DIR__.'/settings.php';

