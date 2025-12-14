import { logout } from '../routes/index';
<template>
    <div>
        <nav class="bg-gray-800">
            <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div class="relative flex h-16 items-center justify-between">
                    <div
                        class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
                    >
                        <div class="flex flex-shrink-0 items-center">
                            <img class="h-8 w-auto" src="/img/spotify.png" />
                        </div>
                        <div class="hidden sm:ml-6 sm:block">
                            <Link
                                :href="route('tracks.index')"
                                :class="
                                    route().current('tracks.*')
                                        ? 'rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white'
                                        : 'rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
                                "
                            >
                                Tracks
                            </Link>
                            <Link
                                :href="route('playlists.index')"
                                :class="
                                    route().current('playlists.*')
                                        ? 'ml-4 rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white'
                                        : 'ml-4 rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
                                "
                            >
                                Playlists
                            </Link>
                            <Link
                                v-if="$page.props.auth.user"
                                :href="route('api-keys.index')"
                                :class="
                                    route().current('api-keys.*')
                                        ? 'ml-4 rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white'
                                        : 'ml-4 rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
                                "
                            >
                                API Keys
                            </Link>
                        </div>
                    </div>
                    <div
                        class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
                    >
                        <Link
                            method="post"
                            :href="route('logout')"
                            v-if="$page.props.auth.user"
                            class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                            Logout
                        </Link>
                        <template v-else>
                            <Link
                                :href="route('login')"
                                class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                            >
                                Login
                            </Link>
                            <Link
                                :href="route('register')"
                                class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                            >
                                Register
                            </Link>
                        </template>
                    </div>
                </div>
            </div>
        </nav>

        <div class="px-16">
            <div class="flex items-center justify-between">
                <h4 class="my-6 text-3xl font-bold">
                    <slot name="title" />
                </h4>
                <div>
                    <slot name="actions" />
                </div>
            </div>

            <slot name="content" />
        </div>
    </div>
</template>

<script>
import { Link } from '@inertiajs/vue3';

export default {
    name: 'MusicLayout',
    components: {
        Link,
    },
};
</script>
