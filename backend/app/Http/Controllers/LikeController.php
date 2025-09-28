<?php

namespace App\Http\Controllers;

use App\Models\Like;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    // Get all likes
    public function index()
    {
        return response()->json(Like::all());
    }

    // Add a like (to a post or comment)
    public function store(Request $request)
    {
        $validated = $request->validate([
            'userId' => 'required|integer|exists:users,userId',
            'postId' => 'nullable|integer|exists:posts,postId',
            'commentId' => 'nullable|integer|exists:comments,commentId',
        ]);

        // Prevent duplicate likes
        $existing = Like::where('userId', $validated['userId'])
            ->where(function ($query) use ($validated) {
                if (!empty($validated['postId'])) {
                    $query->where('postId', $validated['postId']);
                }
                if (!empty($validated['commentId'])) {
                    $query->where('commentId', $validated['commentId']);
                }
            })
            ->first();

        if ($existing) {
            return response()->json(['message' => 'Already liked'], 400);
        }

        $like = Like::create($validated);

        return response()->json([
            'message' => 'Like added successfully',
            'data' => $like
        ], 201);
    }

    // Remove a like
    public function destroy($id)
    {
        $like = Like::findOrFail($id);
        $like->delete();

        return response()->json(['message' => 'Like removed successfully']);
    }
}
