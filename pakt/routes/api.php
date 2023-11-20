<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookController;

//protected routes
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post(
    '/login-user',
    [AuthController::class, 'login_user']
)->name('login');

//public routes
Route::post(
    '/register',
    [AuthController::class, 'register']
);
Route::controller(BookController::class)->group(function () {
    Route::get(
        '/books/{id}',
        'show'
    )->name('show');
    Route::get(
        '/search',
        'search'
    )->name('search');
});
Route::group(['middleware' => ['auth:sanctum']], function() {

    Route::controller(BookController::class)->group(function () {
        Route::post(
            '/books',
            'store'
        )->name('store');
        Route::put(
            '/books/{id}',
            'update'
        )->name('update');
        Route::delete(
            '/books/{id}',
            'destroy'
        )->name('destroy');
    });

});