<template>
    <Card>
        <CardHeader>
            <CardTitle>{{ title }}</CardTitle>
            <CardDescription>
                {{ description }}
            </CardDescription>
        </CardHeader>
        <CardContent>
            <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
                <div class="space-y-2">
                    <Label for="title">Playlist Title</Label>
                    <Input
                        type="text"
                        name="title"
                        id="title"
                        v-model="form.title"
                        placeholder="Enter playlist title..."
                    />
                    <small class="text-red-500" v-if="form.errors.title">
                        {{ form.errors.title }}
                    </small>
                </div>
                <!-- List of all the tracks with checkboxes -->
                <div class="space-y-2">
                    <Label for="tracks">Select Tracks</Label>
                    <div
                        class="max-h-60 overflow-y-auto border border-gray-300 p-2"
                    >
                        <!-- on click of the div, toggle the checkbox -->
                        <div
                            v-for="track in tracks"
                            :key="track.slug"
                            class="flex items-center gap-2"
                            @click="
                                /* trigger checkbox */ $event.target
                                    .closest('div')
                                    .querySelector('input')
                                    .click()
                            "
                        >
                            <input
                                type="checkbox"
                                :value="track.slug"
                                v-model="form.tracks"
                                :id="'track-checkbox-' + track.slug"
                            />
                            <label :for="'track-checkbox-' + track.slug">
                                {{ track.title }} - {{ track.artist }}
                            </label>
                        </div>
                    </div>
                    <small class="text-red-500" v-if="form.errors.tracks">
                        {{ form.errors.tracks }}
                    </small>
                </div>
            </form>
        </CardContent>
        <CardFooter class="flex gap-2">
            <Button
                @click="handleSubmit"
                :disabled="form.processing"
                class="flex-1"
            >
                {{ submitButtonText }}
            </Button>
            <Link :href="route('playlists.index')">
                <Button variant="outline"> Cancel </Button>
            </Link>
        </CardFooter>
    </Card>
</template>

<script>
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link, useForm } from '@inertiajs/vue3';

export default {
    name: 'PlaylistForm',
    components: {
        Button,
        Card,
        CardContent,
        CardDescription,
        CardFooter,
        CardHeader,
        CardTitle,
        Input,
        Label,
        Link,
    },
    props: {
        playlist: {
            type: Object,
            default: null,
        },
        tracks: {
            type: Array,
            required: true,
        },
        title: {
            type: String,
            default: 'Playlist',
        },
        description: {
            type: String,
            default: '',
        },
        submitButtonText: {
            type: String,
            default: 'Submit',
        },
    },
    data() {
        return {
            form: useForm({
                title: this.playlist?.title ?? '',
                tracks: this.playlist?.tracks.map((track) => track.slug) ?? [],
            }),
        };
    },
    methods: {
        handleSubmit() {
            if (this.playlist) {
                this.form.put(route('playlists.update', this.playlist.slug), {
                    preserveState: true,
                    preserveScroll: true,
                });
            } else {
                this.form.post(route('playlists.store'), {
                    preserveState: true,
                    preserveScroll: true,
                });
            }
        },
    },
};
</script>
