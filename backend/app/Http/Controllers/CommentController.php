<?php

namespace App\Http\Controllers;

use App\Models\Comments;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    // ✅ Get all comments
    public function index()
    {
        return response()->json(Comments::all());
    }

    // ✅ Create a new comment
    public function store(Request $request)
    {
        $validated = $request->validate([
            'userId' => 'required|integer|exists:users,userId',
            'postId' => 'required|integer|exists:posts,postId',
            'dateComment' => 'nullable|date',
            'content' => 'required|string|max:1000',
        ]);

        $comment = Comments::create($validated);

        return response()->json([
            'message' => 'Comment created successfully',
            'data' => $comment
        ], 201);
    }

    // ✅ Show a single comment
    public function show($id)
    {
        $comment = Comments::findOrFail($id);
        return response()->json($comment);
    }

    // ✅ Update a comment
    public function update(Request $request, $id)
    {
        $comment = Comments::findOrFail($id);

        $validated = $request->validate([
            'content' => 'sometimes|string|max:1000',
        ]);

        $comment->update($validated);

        return response()->json([
            'message' => 'Comment updated successfully',
            'data' => $comment
        ]);
    }

    // ✅ Delete a comment
    public function destroy($id)
    {
        $comment = Comments::findOrFail($id);
        $comment->delete();

        return response()->json([
            'message' => 'Comment deleted successfully'
        ]);
    }
}
