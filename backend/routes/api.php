<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\DislikeController;
use App\Http\Controllers\CommentController;

use App\Http\Controllers\AuthController;

// Auth
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// User
Route::get('/users', [UserController::class, 'index']);
Route::get('/users/{id}', [UserController::class, 'show']);
Route::post('/users', [UserController::class, 'store']);
Route::put('/users/{id}', [UserController::class, 'update']);
Route::delete('/users/{id}', [UserController::class, 'destroy']);

// Comments
Route::get('/comments', [CommentController::class, 'index']);
Route::post('/comments', [CommentController::class, 'store']);
Route::get('/comments/{id}', [CommentController::class, 'show']);
Route::put('/comments/{id}', [CommentController::class, 'update']);
Route::delete('/comments/{id}', [CommentController::class, 'destroy']);

// Posts
Route::get('/posts', [PostController::class, 'index']);
Route::post('/posts', [PostController::class, 'store']);
Route::get('/posts/{id}', [PostController::class, 'show']);
Route::delete('/posts/{id}', [PostController::class, 'destroy']);

// Likes
Route::get('/likes', [LikeController::class, 'index']);
Route::post('/likes', [LikeController::class, 'store']);
Route::delete('/likes/{id}', [LikeController::class, 'destroy']);

// Dislikes
Route::get('/dislikes', [DislikeController::class, 'index']);
Route::post('/dislikes', [DislikeController::class, 'store']);
Route::delete('/dislikes/{id}', [DislikeController::class, 'destroy']);

// Route::apiResource('users', UserController::class);
// Route::apiResource('posts', PostController::class);
// Route::apiResource('likes', LikeController::class);
// Route::apiResource('dislikes', DislikeController::class);
// Route::apiResource('comments', CommentController::class);