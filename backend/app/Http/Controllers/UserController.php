<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    // Get all users
    public function index()
    {
        return response()->json(User::all(), 200);
    }

    // Get one user by ID
    public function show($id)
    {
        $user = User::findOrFail($id);
        return response()->json($user, 200);
    }

    // Create a new user (with validation + hashed password)
    public function store(Request $request)
    {
        $validated = $request->validate([
            'userName' => 'required|string|max:255',
            'email'    => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
        ]);

        $user = User::create([
            'userName' => $validated['userName'],
            'email'    => $validated['email'],
            'password' => Hash::make($validated['password']),
        ]);

        return response()->json([
            'message' => 'User created successfully!',
            'data' => $user
        ], 201);
    }

    // Update a user
    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $validated = $request->validate([
            'userName' => 'sometimes|string|max:255',
            'email'    => 'sometimes|string|email|max:255|unique:users,email,' . $user->id,
            'password' => 'sometimes|string|min:6',
        ]);

        if (isset($validated['password'])) {
            $validated['password'] = Hash::make($validated['password']);
        }

        $user->update($validated);

        return response()->json([
            'message' => 'User updated successfully!',
            'data' => $user
        ], 200);
    }

    // Delete a user
    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();

        return response()->json(['message' => 'User deleted successfully'], 200);
    }
}
