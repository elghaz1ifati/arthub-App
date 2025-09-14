<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $table = 'user';
    protected $primaryKey = 'userId';
    public $timestamps = true;
    protected $fillable = [
        'firstName', 'lastName', 'userName', 'email', 'password', 'creationDate'
    ];

    public function post() {
        return $this->hasMany(Post::class, 'userId', 'userId');
    }

    public function like() {
        return $this->hasMany(Like::class, 'userId', 'userId');
    }

    public function dislike() {
        return $this->hasMany(Dislike::class, 'userId', 'userId');
    }

    public function comment() {
        return $this->hasMany(Comment::class, 'userId', 'userId');
    }
}
