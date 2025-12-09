<template>
    <MusicLayoutVue>
        <template #title>Modifier un morceau</template>
        <template #actions>
            <Link
                :href="route('tracks.index')"
                class="flex cursor-pointer items-center gap-2 rounded-lg border-2 border-gray-200 bg-gray-50 px-5 py-2.5 text-sm font-semibold text-gray-600 transition-all hover:border-gray-300 hover:bg-gray-100"
            >
                Back to Tracks
            </Link>
        </template>
        <template #content>
            <!-- Formulaire de création de morceau with static variables -->
            <form @submit="submit" class="flex flex-col gap-4">
                <Label for="title">Title</Label>
                <Input
                    type="text"
                    name="title"
                    id="title"
                    v-model="form.title"
                />
                <small class="text-red-500" v-if="form.errors.title">{{
                    form.errors.title
                }}</small>
                <Label for="artist">Artist</Label>
                <Input
                    type="text"
                    name="artist"
                    id="artist"
                    v-model="form.artist"
                />
                <small class="text-red-500" v-if="form.errors.artist">{{
                    form.errors.artist
                }}</small>
                <input
                    type="submit"
                    value="Modifier Track"
                    @click.prevent="submit"
                    :disabled="form.processing"
                    class="cursor-pointer text-white"
                />
            </form>
        </template>
    </MusicLayoutVue>
</template>
<script>
import { Input } from '@/components/ui/input';
import MusicLayoutVue from '@/layouts/MusicLayout.vue';
import { Link, useForm } from '@inertiajs/vue3';
import { Label } from 'reka-ui';
export default {
    name: 'Create',
    components: {
        MusicLayoutVue,
        Link,
        Input,
        Label,
    },
    data() {
        return {
            form: useForm({
                title: this.$props.track.title,
                artist: this.$props.track.artist,
                id: this.$props.track.id,
            }),
        };
    },
    props: {
        track: Object,
    },
    methods: {
        submit() {
            this.form.put(route('tracks.update', { track: this.form.id }), {
                preserveState: true,
                preserveScroll: true,
            });
            console.log('Form submitted:', this.form);
        },
    },
};
</script>
