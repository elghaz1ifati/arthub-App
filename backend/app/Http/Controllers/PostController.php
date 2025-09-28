<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    // Get all posts with their user info
    public function index()
    {
        return response()->json(
            Post::with('user', 'comments', 'likes', 'dislikes')->latest()->get()
        );
    }

    // Create a new post
    public function store(Request $request)
    {
        $validated = $request->validate([
            'userId' => 'required|exists:users,userId',
            'content' => 'required|string|max:1000',
            'image'   => 'nullable|string', // URL or base64 if you plan to handle uploads
        ]);

        $post = Post::create($validated);

        return response()->json([
            'message' => 'Post created successfully!',
            'data' => $post
        ], 201);
    }

    // Show a single post with relationships
    public function show($id)
    {
        $post = Post::with('user', 'comments.user', 'likes', 'dislikes')->findOrFail($id);

        return response()->json($post);
    }

    // Delete a post
    public function destroy($id)
    {
        $post = Post::findOrFail($id);
        $post->delete();

        return response()->json(['message' => 'Post deleted successfully']);
    }
}
