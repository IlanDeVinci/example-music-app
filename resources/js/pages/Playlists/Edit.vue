<template>
    <MusicLayoutVue>
        <template #title>Edit Playlist</template>
        <template #actions>
            <Link
                :href="route('playlists.index')"
                class="flex cursor-pointer items-center gap-2 rounded-lg border-2 border-gray-200 bg-gray-50 px-5 py-2.5 text-sm font-semibold text-gray-600 transition-all hover:border-gray-300 hover:bg-gray-100"
            >
                Back to Playlists
            </Link>
        </template>
        <template #content>
            <div class="mx-auto max-w-2xl">
                <PlaylistForm
                    :playlist="playlist"
                    :tracks="tracks"
                    title="Edit Playlist"
                    description="Update your playlist details"
                    submitButtonText="Update Playlist"
                />
            </div>
        </template>
    </MusicLayoutVue>
</template>

<script>
import PlaylistForm from '@/components/Playlists/PlaylistForm.vue';
import MusicLayoutVue from '@/layouts/MusicLayout.vue';
import { Link } from '@inertiajs/vue3';

export default {
    name: 'PlaylistsEdit',
    components: {
        MusicLayoutVue,
        Link,
        PlaylistForm,
    },
    props: {
        playlist: Object,
        tracks: Array,
    },
};
</script>
