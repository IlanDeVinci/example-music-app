<template>
    <MusicLayoutVue>
        <template #title>My API Keys</template>
        <template #actions>
            <Link
                :href="route('api-keys.create')"
                v-if="$page.props.auth.user"
                class="flex cursor-pointer items-center gap-2 rounded-lg border-2 border-gray-200 bg-gray-50 px-5 py-2.5 text-sm font-semibold text-gray-600 transition-all hover:border-gray-300 hover:bg-gray-100"
            >
                Create API Key
            </Link>
        </template>
        <template #content>
            <div
                v-if="$page.props.flash && $page.props.flash.newKey"
                class="mb-6 rounded-lg border border-green-200 bg-green-50 p-4"
            >
                <h3 class="mb-2 font-semibold text-green-800">
                    API Key Created Successfully!
                </h3>
                <p class="mb-2 text-green-700">
                    Please copy your new API key below as it cannot not be shown
                    again.
                </p>
                <div class="flex gap-2">
                    <code
                        class="flex-1 rounded border border-green-300 bg-white px-3 py-2 font-mono text-sm text-black"
                    >
                        {{ $page.props.flash.newKey }}
                    </code>
                    <Button
                        variant="outline"
                        @click="copyToClipboard($page.props.flash.newKey)"
                    >
                        Copy
                    </Button>
                </div>
            </div>

            <Input
                type="search"
                placeholder="Search API keys..."
                class="mb-6 w-full"
                v-model="search"
            />
            <div
                v-if="filteredApiKeys.length === 0"
                class="py-12 text-center text-gray-500"
            >
                <p class="mb-2 text-lg">No API keys found</p>
                <p class="text-sm">
                    Create your first API key to access the API!
                </p>
            </div>
            <div v-else class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card
                    v-for="apiKey in filteredApiKeys"
                    :key="apiKey.slug"
                    class="transition-shadow hover:shadow-lg"
                >
                    <CardHeader>
                        <CardTitle>{{ apiKey.name }}</CardTitle>
                        <CardDescription class="space-y-1">
                            <div class="flex items-center gap-2">
                                <span class="text-xs">Key:</span>
                                <code
                                    class="flex-1 rounded bg-gray-100 px-2 py-1 font-mono text-xs"
                                >
                                    🞄🞄🞄🞄🞄🞄🞄🞄🞄🞄🞄🞄🞄🞄🞄🞄🞄🞄🞄
                                </code>
                            </div>
                            <div class="text-xs">
                                Created {{ formatDate(apiKey.created_at) }}
                            </div>
                        </CardDescription>
                    </CardHeader>
                    <CardFooter
                        class="flex gap-2"
                        v-if="
                            $page.props.auth.user &&
                            apiKey.user_id === $page.props.auth.user.id
                        "
                    >
                        <Link
                            :href="route('api-keys.edit', apiKey.slug)"
                            class="flex-1"
                        >
                            <Button variant="outline" class="w-full">
                                Edit
                            </Button>
                        </Link>
                        <Button
                            variant="destructive"
                            @click="handleDelete(apiKey.slug)"
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
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import Input from '@/components/ui/input/Input.vue';
import MusicLayoutVue from '@/layouts/MusicLayout.vue';
import { Link, router } from '@inertiajs/vue3';

export default {
    name: 'ApiKeysIndex',
    props: {
        apiKeys: {
            type: Array,
            default: () => [],
        },
    },
    components: {
        MusicLayoutVue,
        Link,
        Input,
        Card,
        CardHeader,
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
        filteredApiKeys() {
            if (!this.apiKeys) return [];
            return this.apiKeys.filter((apiKey) =>
                apiKey.name.toLowerCase().includes(this.search.toLowerCase()),
            );
        },
    },
    methods: {
        copyToClipboard(text) {
            navigator.clipboard.writeText(text).then(() => {
                alert('API key copied to clipboard!');
            });
        },
        handleDelete(slug) {
            if (
                confirm(
                    'Are you sure you want to delete this API key? This action cannot be undone.',
                )
            ) {
                router.delete(route('api-keys.destroy', slug), {
                    preserveState: true,
                    preserveScroll: true,
                });
            }
        },
        formatDate(date) {
            return new Date(date).toLocaleDateString();
        },
        copyToClipboard(text) {
            navigator.clipboard.writeText(text).then(() => {
                alert('API key copied to clipboard!');
            });
        },
    },
};
</script>
