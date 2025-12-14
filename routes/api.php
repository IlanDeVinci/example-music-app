<?php

use App\Http\Controllers\Api\PlaylistApiController;
use Illuminate\Support\Facades\Route;

Route::get('/playlists', [PlaylistApiController::class, 'index'])->middleware('api.key')->name('api.playlists.index');