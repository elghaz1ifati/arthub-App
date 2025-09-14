<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    // Get all users
    public function index()
    {
        return User::all();
    }

    // Get one user by ID
    public function show($id)
    {
        return User::findOrFail($id);
    }

    // Create a new user
    public function store(Request $request)
    {
        $user = User::create($request->all());
        return response()->json($user, 201);
    }

    // Update a user
    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->update($request->all());
        return response()->json($user, 200);
    }

    // Delete a user
    public function destroy($id)
    {
        User::destroy($id);
        return response()->json(null, 204);
    }
}
