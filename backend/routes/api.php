<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\DislikeController;
use App\Http\Controllers\CommentController;

Route::apiResource('users', UserController::class);
Route::apiResource('posts', PostController::class);
Route::apiResource('likes', LikeController::class);
Route::apiResource('dislikes', DislikeController::class);
Route::apiResource('comments', CommentController::class);
