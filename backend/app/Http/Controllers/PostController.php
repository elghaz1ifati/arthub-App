<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        return Post::with('user')->get(); // show posts with user info
    }

    public function store(Request $request)
    {
        $post = Post::create($request->all());
        return response()->json($post, 201);
    }

    public function show($id)
    {
        return Post::with('comments', 'likes', 'dislikes')->findOrFail($id);
    }
}
