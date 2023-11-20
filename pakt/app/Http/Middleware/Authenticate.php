<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Traits\HttpResponses;
class Authenticate extends Middleware
{
    use HttpResponses;
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     */
    protected function redirectTo(Request $request): ?string
    {
        // if (!$request->expectsJson()) {
            // return response()->json([
            //     'status' => false,
            //     'message' => 'Credentials do not match',
            //     'details' => []
            // ], 403);
            // return $this->error('', 'Credentials do not match', Response::HTTP_UNAUTHORIZED);
        // }
        return $this->error(
            [],
            'Unauthorized Access',
             301
        );
    }
}
