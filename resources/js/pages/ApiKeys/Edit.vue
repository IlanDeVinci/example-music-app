<template>
    <MusicLayoutVue>
        <template #title>Edit API Key</template>
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
                        <CardTitle>Edit API Key</CardTitle>
                        <CardDescription>
                            Update the name of your API key
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
                            <Button
                                type="submit"
                                :disabled="form.processing"
                                class="w-full"
                            >
                                Update API Key
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
    name: 'ApiKeysEdit',
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
    props: {
        apiKey: Object,
    },
    data() {
        return {
            form: useForm({
                name: this.$props.apiKey.name,
            }),
        };
    },
    methods: {
        submit() {
            this.form.put(route('api-keys.update', this.$props.apiKey.slug), {
                preserveState: true,
                preserveScroll: true,
            });
        },
    },
};
</script>
