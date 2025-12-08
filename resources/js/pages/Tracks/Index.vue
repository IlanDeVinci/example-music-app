<template>
    <MusicLayoutVue>
        <template #title>Liste des morceaux</template>
        <template #actions></template>
        <template #content>
            <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                <Track
                    v-for="track in tracks"
                    :key="track.slug"
                    :track="track"
                    @like="handleLike"
                    @delete="handleDelete"
                />
            </div>
        </template>
    </MusicLayoutVue>
</template>

<script>
import Track from '@/components/Tracks/Track.vue';
import MusicLayoutVue from '@/layouts/MusicLayout.vue';

export default {
    name: 'Index',
    props: {
        tracks: Array,
    },
    components: {
        MusicLayoutVue,
        Track,
    },
    methods: {
        handleLike(slug) {
            console.log('Liked track:', slug);
        },
        handleDelete(slug) {
            console.log('Delete track:', slug);
        },
    },
};
</script>
