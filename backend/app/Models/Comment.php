<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $table = 'comment';
    protected $primaryKey = 'commentId';
    public $timestamps = true;

    protected $fillable = ['userId','postId','dateComment'];

    public function post() {
        return $this->belongsTo(Post::class, 'postId', 'postId');
    }

    public function user() {
        return $this->belongsTo(User::class, 'userId', 'userId');
    }
}

