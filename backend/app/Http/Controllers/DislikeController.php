<?php

namespace App\Http\Controllers;

use App\Models\Dislike;
use Illuminate\Http\Request;

class DislikeController extends Controller
{
    // Get all dislikes
    public function index()
    {
        return response()->json(Dislike::all());
    }

    // Add a dislike (to a post or comment)
    public function store(Request $request)
    {
        $validated = $request->validate([
            'userId' => 'required|integer|exists:users,userId',
            'postId' => 'nullable|integer|exists:posts,postId',
            'commentId' => 'nullable|integer|exists:comments,commentId',
        ]);

        // Prevent duplicate dislikes
        $existing = Dislike::where('userId', $validated['userId'])
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
            return response()->json(['message' => 'Already disliked'], 400);
        }

        $dislike = Dislike::create($validated);

        return response()->json([
            'message' => 'Dislike added successfully',
            'data' => $dislike
        ], 201);
    }

    // Remove a dislike
    public function destroy($id)
    {
        $dislike = Dislike::findOrFail($id);
        $dislike->delete();

        return response()->json(['message' => 'Dislike removed successfully']);
    }
}
