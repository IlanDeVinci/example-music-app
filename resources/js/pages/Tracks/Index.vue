<template>
    <MusicLayoutVue>
        <template #title>Liste des morceaux</template>
        <template #actions>
            <Link
                :href="route('tracks.create')"
                v-if="$page.props.auth.user?.admin"
                class="flex cursor-pointer items-center gap-2 rounded-lg border-2 border-gray-200 bg-gray-50 px-5 py-2.5 text-sm font-semibold text-gray-600 transition-all hover:border-gray-300 hover:bg-gray-100"
            >
                Créer un morceau
            </Link>
        </template>
        <template #content>
            <Input
                type="search"
                placeholder="Search tracks..."
                class="mb-6 w-full"
                v-model="search"
            />
            <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                <Track
                    v-for="track in filteredTracks"
                    :key="track.slug"
                    :track="track"
                    @like="handleLike"
                    @delete="handleDelete"
                    @listen="play"
                />
            </div>
        </template>
    </MusicLayoutVue>
</template>

<script>
import Track from '@/components/Tracks/Track.vue';
import Input from '@/components/ui/input/Input.vue';
import MusicLayoutVue from '@/layouts/MusicLayout.vue';
import { Link } from '@inertiajs/vue3';

export default {
    name: 'Index',
    props: {
        tracks: Array,
    },
    components: {
        MusicLayoutVue,
        Track,
        Link,
        Input,
    },
    data() {
        return {
            audioInstance: null,
            currentTrack: null,
            search: '',
        };
    },
    computed: {
        filteredTracks() {
            return this.tracks.filter((track) =>
                track.title.toLowerCase().includes(this.search.toLowerCase()),
            );
        },
    },
    methods: {
        handleLike(slug) {
            console.log('Liked track:', slug);
        },
        handleDelete(slug) {
            console.log('Delete track:', slug);
        },
        changeCurrentAudio(track) {
            this.audioInstance = new Audio('storage/' + track.audio);
            this.audioInstance.play();
            this.currentTrack = track;
        },
        play(track) {
            console.log('Playing track:', track.slug);
            if (!this.audioInstance) {
                this.changeCurrentAudio(track);
            } else if (track != this.currentTrack) {
                console.log('Changing track to:', track.slug);
                this.audioInstance.pause();
                this.changeCurrentAudio(track);
            } else if (this.audioInstance.paused) {
                this.audioInstance.play();
            } else {
                this.audioInstance.pause();
            }
        },
    },
};
</script>
