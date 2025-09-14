<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $table = 'post';
    protected $primaryKey = 'postId';
    public $timestamps = true;

    protected $fillable = ['userId','description','datePost'];

    public function user() {
        return $this->belongsTo(User::class, 'userId', 'userId');
    }

    public function likes() {
        return $this->hasMany(Like::class, 'postId', 'postId');
    }

    public function dislikes() {
        return $this->hasMany(Dislike::class, 'postId', 'postId');
    }

    public function comments() {
        return $this->hasMany(Comment::class, 'postId', 'postId');
    }
}

