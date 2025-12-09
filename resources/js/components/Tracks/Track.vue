<template>
    <div
        @click="handleListen"
        class="flex max-w-3xl gap-6 rounded-xl bg-white p-6 shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
    >
        <!-- Track Image -->
        <div class="relative flex-shrink-0">
            <img
                :src="'storage/' + track.image || '/img/playicon.png'"
                :alt="`${track.title} album art`"
                class="h-45 w-45 rounded-lg bg-gray-100 object-cover"
            />
            <div
                v-if="!track.is_visible"
                class="absolute top-2 right-2 rounded bg-black/70 px-2 py-1 text-xs font-semibold text-white"
            >
                Hidden
            </div>
        </div>

        <!-- Track Info -->
        <div class="flex flex-1 flex-col gap-3">
            <h2 class="m-0 text-2xl font-bold text-gray-900">
                {{ track.title }}
            </h2>
            <p class="m-0 text-lg font-medium text-gray-600">
                {{ track.artist }}
            </p>

            <!-- Play Count -->
            <div class="flex items-center gap-4">
                <span
                    class="flex items-center gap-2 text-sm font-medium text-gray-600"
                >
                    <PlayIcon :size="16" class-name="text-purple-600" />
                    {{ track.play_count || 0 }} plays
                </span>
            </div>

            <!-- Audio Player -->
            <div class="mt-auto">
                <audio
                    :src="'storage/' + track.audio"
                    controls
                    controlsList="nodownload"
                    class="h-10 w-full"
                >
                    Your browser does not support the audio element.
                </audio>
                {{ track.audio }}
            </div>

            <!-- Action Buttons -->
            <div class="mt-2 flex gap-3">
                <button
                    @click.stop="toggleLike"
                    :class="[
                        'flex cursor-pointer items-center gap-2 rounded-lg border-2 px-5 py-2.5 text-sm font-semibold transition-all',
                        isLiked
                            ? 'border-red-200 bg-red-50 text-red-600 hover:border-red-300 hover:bg-red-100'
                            : 'border-gray-200 bg-gray-50 text-gray-600 hover:border-gray-300 hover:bg-gray-100',
                    ]"
                >
                    <HeartIcon :size="20" :filled="isLiked" />
                    Like
                </button>
                <button
                    @click.stop="handleDelete"
                    class="flex cursor-pointer items-center gap-2 rounded-lg border-2 border-red-200 bg-red-50 px-5 py-2.5 text-sm font-semibold text-red-600 transition-all hover:border-red-300 hover:bg-red-100"
                >
                    <TrashIcon :size="20" />
                    Delete
                </button>
                <Link
                    :href="route('tracks.destroy', { track: track })"
                    method="delete"
                    as="button"
                    preserve-scroll
                    value="Delete"
                ></Link>
                <Link
                    @click.stop
                    :href="route('tracks.edit', { track: track })"
                    flex
                    cursor-pointer
                    items-center
                    gap-2
                    rounded-lg
                    border-2
                    border-red-200
                    bg-red-50
                    px-5
                    py-2.5
                    text-sm
                    font-semibold
                    text-red-600
                    transition-all
                    hover:border-red-300
                    hover:bg-red-100
                    ><button
                        class="flex cursor-pointer items-center gap-2 rounded-lg border-2 bg-blue-300 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-400"
                    >
                        Modifier
                    </button></Link
                >
            </div>
        </div>
    </div>
</template>

<script>
import { Link } from '@inertiajs/vue3';
import HeartIcon from '../Icons/HeartIcon.vue';
import PlayIcon from '../Icons/PlayIcon.vue';
import TrashIcon from '../Icons/TrashIcon.vue';

export default {
    name: 'Track',
    components: {
        PlayIcon,
        HeartIcon,
        TrashIcon,
        Link,
    },
    props: {
        track: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            isLiked: false,
        };
    },
    methods: {
        handleDelete() {
            this.$inertia.delete(
                route('tracks.destroy', { track: this.track }),
                {
                    preserveState: true,
                    preserveScroll: true,
                },
            );
        },
        toggleLike() {
            this.isLiked = !this.isLiked;
            this.$emit('like', this.track.slug);
        },
        handleListen() {
            this.$emit('listen', this.track);
        },
    },
    emits: ['like', 'delete', 'listen'],
};
</script>
