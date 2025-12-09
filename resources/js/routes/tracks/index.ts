import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\TrackController::index
 * @see app/Http/Controllers/TrackController.php:12
 * @route '/tracks'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/tracks',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TrackController::index
 * @see app/Http/Controllers/TrackController.php:12
 * @route '/tracks'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TrackController::index
 * @see app/Http/Controllers/TrackController.php:12
 * @route '/tracks'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TrackController::index
 * @see app/Http/Controllers/TrackController.php:12
 * @route '/tracks'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\TrackController::index
 * @see app/Http/Controllers/TrackController.php:12
 * @route '/tracks'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\TrackController::index
 * @see app/Http/Controllers/TrackController.php:12
 * @route '/tracks'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\TrackController::index
 * @see app/Http/Controllers/TrackController.php:12
 * @route '/tracks'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\TrackController::create
 * @see app/Http/Controllers/TrackController.php:20
 * @route '/tracks/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/tracks/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TrackController::create
 * @see app/Http/Controllers/TrackController.php:20
 * @route '/tracks/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TrackController::create
 * @see app/Http/Controllers/TrackController.php:20
 * @route '/tracks/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TrackController::create
 * @see app/Http/Controllers/TrackController.php:20
 * @route '/tracks/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\TrackController::create
 * @see app/Http/Controllers/TrackController.php:20
 * @route '/tracks/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\TrackController::create
 * @see app/Http/Controllers/TrackController.php:20
 * @route '/tracks/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\TrackController::create
 * @see app/Http/Controllers/TrackController.php:20
 * @route '/tracks/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\TrackController::store
 * @see app/Http/Controllers/TrackController.php:25
 * @route '/tracks'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/tracks',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\TrackController::store
 * @see app/Http/Controllers/TrackController.php:25
 * @route '/tracks'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TrackController::store
 * @see app/Http/Controllers/TrackController.php:25
 * @route '/tracks'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\TrackController::store
 * @see app/Http/Controllers/TrackController.php:25
 * @route '/tracks'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\TrackController::store
 * @see app/Http/Controllers/TrackController.php:25
 * @route '/tracks'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\TrackController::edit
 * @see app/Http/Controllers/TrackController.php:51
 * @route '/tracks/{track}/edit'
 */
export const edit = (args: { track: number | { id: number } } | [track: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/tracks/{track}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TrackController::edit
 * @see app/Http/Controllers/TrackController.php:51
 * @route '/tracks/{track}/edit'
 */
edit.url = (args: { track: number | { id: number } } | [track: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { track: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { track: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    track: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        track: typeof args.track === 'object'
                ? args.track.id
                : args.track,
                }

    return edit.definition.url
            .replace('{track}', parsedArgs.track.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TrackController::edit
 * @see app/Http/Controllers/TrackController.php:51
 * @route '/tracks/{track}/edit'
 */
edit.get = (args: { track: number | { id: number } } | [track: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TrackController::edit
 * @see app/Http/Controllers/TrackController.php:51
 * @route '/tracks/{track}/edit'
 */
edit.head = (args: { track: number | { id: number } } | [track: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\TrackController::edit
 * @see app/Http/Controllers/TrackController.php:51
 * @route '/tracks/{track}/edit'
 */
    const editForm = (args: { track: number | { id: number } } | [track: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\TrackController::edit
 * @see app/Http/Controllers/TrackController.php:51
 * @route '/tracks/{track}/edit'
 */
        editForm.get = (args: { track: number | { id: number } } | [track: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\TrackController::edit
 * @see app/Http/Controllers/TrackController.php:51
 * @route '/tracks/{track}/edit'
 */
        editForm.head = (args: { track: number | { id: number } } | [track: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\TrackController::update
 * @see app/Http/Controllers/TrackController.php:58
 * @route '/tracks/{track}'
 */
export const update = (args: { track: number | { id: number } } | [track: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/tracks/{track}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\TrackController::update
 * @see app/Http/Controllers/TrackController.php:58
 * @route '/tracks/{track}'
 */
update.url = (args: { track: number | { id: number } } | [track: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { track: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { track: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    track: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        track: typeof args.track === 'object'
                ? args.track.id
                : args.track,
                }

    return update.definition.url
            .replace('{track}', parsedArgs.track.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TrackController::update
 * @see app/Http/Controllers/TrackController.php:58
 * @route '/tracks/{track}'
 */
update.put = (args: { track: number | { id: number } } | [track: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\TrackController::update
 * @see app/Http/Controllers/TrackController.php:58
 * @route '/tracks/{track}'
 */
    const updateForm = (args: { track: number | { id: number } } | [track: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\TrackController::update
 * @see app/Http/Controllers/TrackController.php:58
 * @route '/tracks/{track}'
 */
        updateForm.put = (args: { track: number | { id: number } } | [track: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\TrackController::destroy
 * @see app/Http/Controllers/TrackController.php:73
 * @route '/tracks/{track}'
 */
export const destroy = (args: { track: number | { id: number } } | [track: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/tracks/{track}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\TrackController::destroy
 * @see app/Http/Controllers/TrackController.php:73
 * @route '/tracks/{track}'
 */
destroy.url = (args: { track: number | { id: number } } | [track: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { track: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { track: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    track: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        track: typeof args.track === 'object'
                ? args.track.id
                : args.track,
                }

    return destroy.definition.url
            .replace('{track}', parsedArgs.track.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TrackController::destroy
 * @see app/Http/Controllers/TrackController.php:73
 * @route '/tracks/{track}'
 */
destroy.delete = (args: { track: number | { id: number } } | [track: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\TrackController::destroy
 * @see app/Http/Controllers/TrackController.php:73
 * @route '/tracks/{track}'
 */
    const destroyForm = (args: { track: number | { id: number } } | [track: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\TrackController::destroy
 * @see app/Http/Controllers/TrackController.php:73
 * @route '/tracks/{track}'
 */
        destroyForm.delete = (args: { track: number | { id: number } } | [track: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const tracks = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default tracks