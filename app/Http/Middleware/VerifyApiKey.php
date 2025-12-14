<?php

namespace App\Http\Middleware;

use App\Models\ApiKey;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class VerifyApiKey
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $apiKeyHeader = $request->header('x-api-key');

        if (!$apiKeyHeader) {
            return response()->json([
                'success' => false,
                'message' => 'API key is required. Please provide an x-api-key header.',
            ], 401);
        }

        // Hash the incoming key and query by hash
        $hashedKey = hash('sha256', $apiKeyHeader);
        $apiKey = ApiKey::where('key', $hashedKey)->first();

        if (!$apiKey) {
            return response()->json([
                'success' => false,
                'message' => 'Invalid API key.',
            ], 401);
        }

        // Get the user associated with this API key
        $user = $apiKey->user;

        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'User not found for this API key.',
            ], 401);
        }

        // Set the user in the request
        $request->setUserResolver(function () use ($user) {
            return $user;
        });

        return $next($request);
    }
}
