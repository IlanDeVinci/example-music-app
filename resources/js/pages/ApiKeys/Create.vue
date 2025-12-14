<template>
    <MusicLayoutVue>
        <template #title>Create API Key</template>
        <template #actions>
            <Link
                :href="route('api-keys.index')"
                class="flex cursor-pointer items-center gap-2 rounded-lg border-2 border-gray-200 bg-gray-50 px-5 py-2.5 text-sm font-semibold text-gray-600 transition-all hover:border-gray-300 hover:bg-gray-100"
            >
                Back to API Keys
            </Link>
        </template>
        <template #content>
            <div class="mx-auto max-w-2xl">
                <Card>
                    <CardHeader>
                        <CardTitle>New API Key</CardTitle>
                        <CardDescription>
                            Create a new API key to access your playlists
                            programmatically
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form @submit.prevent="submit" class="space-y-4">
                            <div class="space-y-2">
                                <Label for="name">Name</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    v-model="form.name"
                                    placeholder="e.g., Production API, Development Key"
                                />
                                <small
                                    class="text-red-500"
                                    v-if="form.errors.name"
                                    >{{ form.errors.name }}</small
                                >
                            </div>
                            <div
                                class="rounded-lg border border-yellow-200 bg-yellow-50 p-4"
                            >
                                <p class="text-sm text-yellow-800">
                                    <strong>Important:</strong> Your API key
                                    will only be shown once after creation. Make
                                    sure to copy and store it securely.
                                </p>
                            </div>
                            <Button
                                type="submit"
                                :disabled="form.processing"
                                class="w-full"
                            >
                                Create API Key
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </template>
    </MusicLayoutVue>
</template>

<script>
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import MusicLayoutVue from '@/layouts/MusicLayout.vue';
import { Link, useForm } from '@inertiajs/vue3';

export default {
    name: 'ApiKeysCreate',
    components: {
        MusicLayoutVue,
        Link,
        Input,
        Label,
        Button,
        Card,
        CardHeader,
        CardTitle,
        CardDescription,
        CardContent,
    },
    data() {
        return {
            form: useForm({
                name: '',
            }),
        };
    },
    methods: {
        submit() {
            this.form.post(route('api-keys.store'), {
                preserveState: false,
                preserveScroll: true,
            });
        },
    },
};
</script>
