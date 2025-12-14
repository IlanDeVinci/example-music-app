<?php

namespace App\Http\Controllers;

use App\Http\Requests\ApiKeyRequest;
use App\Models\ApiKey;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Str;

class ApiKeyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $apiKeys = ApiKey::where('user_id', Auth::id())
            ->select('id', 'slug', 'name', 'user_id', 'created_at')
            ->get()
            ->map(function ($apiKey) {
                return [
                    'id' => $apiKey->id,
                    'slug' => $apiKey->slug,
                    'name' => $apiKey->name,
                    'user_id' => $apiKey->user_id,
                    'created_at' => $apiKey->created_at,
                ];
            });

        return Inertia::render('ApiKeys/Index', [
            'apiKeys' => $apiKeys,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('ApiKeys/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ApiKeyRequest $request)
    {
        $validated = $request->validated();

        $slug = 'key-' . Str::uuid();
        $plainKey = 'sk_' . Str::random(48); // Plain key shown once to user

        ApiKey::create([
            'slug' => $slug,
            'user_id' => Auth::id(),
            'name' => $validated['name'],
            'key' => hash('sha256', $plainKey), // Store hashed key for security
        ]);

        return redirect()->route('api-keys.index')->with([
            'success' => 'API key created successfully.',
            'newKey' => $plainKey, // Show plain key once
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ApiKey $apiKey)
    {
        // Ensure the user owns this API key
        if ($apiKey->user_id !== Auth::id()) {
            abort(403);
        }

        return Inertia::render('ApiKeys/Edit', [
            'apiKey' => [
                'slug' => $apiKey->slug,
                'name' => $apiKey->name,
            ],
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ApiKeyRequest $request, ApiKey $apiKey)
    {
        // Ensure the user owns this API key
        if ($apiKey->user_id !== Auth::id()) {
            abort(403);
        }

        $validated = $request->validated();

        $apiKey->name = $validated['name'];
        $apiKey->save();

        return redirect()->route('api-keys.index')->with('success', 'API key updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ApiKey $apiKey)
    {
        // Ensure the user owns this API key
        if ($apiKey->user_id !== Auth::id()) {
            abort(403);
        }

        $apiKey->delete();
        
        return redirect()->route('api-keys.index')->with('success', 'API key deleted successfully.');
    }
}
