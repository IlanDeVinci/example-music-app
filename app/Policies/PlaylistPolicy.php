<?php

namespace App\Policies;

use App\Models\Playlist;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class PlaylistPolicy
{
    /**
     * Determine whether the user can view any playlists.
     */
    public function viewAny(User $user): bool
    {
        return true;
    }

    /**
     * Determine whether the user can view the playlist.
     */
    public function view(User $user, Playlist $playlist): bool
    {
        return $user->id === $playlist->user_id;
    }

    /**
     * Determine whether the user can create playlists.
     */
    public function create(User $user): bool
    {
        return true;
    }

    /**
     * Determine whether the user can update the playlist.
     */
    public function update(User $user, Playlist $playlist): bool
    {
        return $user->id === $playlist->user_id;
    }

    /**
     * Determine whether the user can delete the playlist.
     */
    public function delete(User $user, Playlist $playlist): bool
    {
        return $user->id === $playlist->user_id;
    }

    /**
     * Determine whether the user can restore the playlist.
     */
    public function restore(User $user, Playlist $playlist): bool
    {
        return $user->id === $playlist->user_id;
    }

    /**
     * Determine whether the user can permanently delete the playlist.
     */
    public function forceDelete(User $user, Playlist $playlist): bool
    {
        return $user->id === $playlist->user_id;
    }
}
