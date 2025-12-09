<template>
    <MusicLayoutVue>
        <template #title>Créer un morceau</template>
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
                <Label for="image">Image File</Label>
                <Input
                    type="file"
                    name="image"
                    id="image"
                    @input="form.image = $event.target.files[0]"
                />
                <small class="text-red-500" v-if="form.errors.image">{{
                    form.errors.image
                }}</small>
                <Label for="music">Music File</Label>
                <Input
                    type="file"
                    name="music"
                    id="music"
                    @input="form.music = $event.target.files[0]"
                />
                <small class="text-red-500" v-if="form.errors.music">{{
                    form.errors.music
                }}</small>
                <input
                    type="submit"
                    value="Create Track"
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
                title: '',
                artist: '',
                image: null,
                music: null,
            }),
        };
    },
    methods: {
        submit() {
            this.form.post(route('tracks.store'), {
                preserveState: true,
                preserveScroll: true,
            });
            console.log('Form submitted:', this.form);
        },
    },
};
</script>
