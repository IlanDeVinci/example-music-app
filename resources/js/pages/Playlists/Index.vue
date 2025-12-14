<template>
    <MusicLayoutVue>
        <template #title>My Playlists</template>
        <template #actions>
            <Link
                :href="route('playlists.create')"
                v-if="$page.props.auth.user"
                class="flex cursor-pointer items-center gap-2 rounded-lg border-2 border-gray-200 bg-gray-50 px-5 py-2.5 text-sm font-semibold text-gray-600 transition-all hover:border-gray-300 hover:bg-gray-100"
            >
                Create Playlist
            </Link>
        </template>
        <template #content>
            <Input
                type="search"
                placeholder="Search playlists..."
                class="mb-6 w-full"
                v-model="search"
            />
            <div
                v-if="filteredPlaylists.length === 0"
                class="py-12 text-center text-gray-500"
            >
                <p class="mb-2 text-lg">No playlists found</p>
                <p class="text-sm">
                    Create your first playlist to get started!
                </p>
            </div>
            <div v-else class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card
                    v-for="playlist in filteredPlaylists"
                    :key="playlist.slug"
                    class="transition-shadow hover:shadow-lg"
                >
                    <CardHeader>
                        <CardTitle>{{ playlist.title }}</CardTitle>
                        <CardDescription class="space-y-1">
                            <div>
                                Created by
                                {{ playlist.user?.name || 'Unknown' }}
                            </div>
                            <div>
                                {{ playlist.tracks_count || 0 }} track{{
                                    (playlist.tracks_count || 0) !== 1
                                        ? 's'
                                        : ''
                                }}
                            </div>
                        </CardDescription>
                    </CardHeader>
                    <CardContent
                        v-if="playlist.tracks && playlist.tracks.length > 0"
                    >
                        <div class="space-y-1">
                            <div
                                class="mb-2 text-sm font-semibold text-gray-700"
                            >
                                Tracks:
                            </div>
                            <div class="max-h-32 space-y-1 overflow-y-auto">
                                <div
                                    v-for="track in playlist.tracks"
                                    :key="track.id"
                                    class="truncate text-sm text-gray-600"
                                >
                                    {{ track.title }} - {{ track.artist }}
                                </div>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter
                        class="flex gap-2"
                        v-if="
                            $page.props.auth.user &&
                            playlist.user_id === $page.props.auth.user.id
                        "
                    >
                        <Link
                            :href="route('playlists.edit', playlist.slug)"
                            class="flex-1"
                        >
                            <Button variant="outline" class="w-full">
                                Edit
                            </Button>
                        </Link>
                        <Button
                            variant="destructive"
                            @click="handleDelete(playlist.slug)"
                        >
                            <Icon name="trash" class="h-4 w-4" />
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </template>
    </MusicLayoutVue>
</template>

<script>
import Icon from '@/components/Icon.vue';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import Input from '@/components/ui/input/Input.vue';
import MusicLayoutVue from '@/layouts/MusicLayout.vue';
import { Link, router } from '@inertiajs/vue3';

export default {
    name: 'PlaylistsIndex',
    props: {
        playlists: Array,
    },
    components: {
        MusicLayoutVue,
        Link,
        Input,
        Card,
        CardHeader,
        CardContent,
        CardTitle,
        CardDescription,
        CardFooter,
        Button,
        Icon,
    },
    data() {
        return {
            search: '',
        };
    },
    computed: {
        filteredPlaylists() {
            return this.playlists.filter((playlist) =>
                playlist.title
                    .toLowerCase()
                    .includes(this.search.toLowerCase()),
            );
        },
    },
    methods: {
        handleDelete(slug) {
            if (confirm('Are you sure you want to delete this playlist?')) {
                router.delete(route('playlists.destroy', slug), {
                    preserveState: true,
                    preserveScroll: true,
                });
            }
        },
    },
};
</script>
