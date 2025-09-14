<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    protected $table = 'like';
    protected $primaryKey = 'likeId';
    public $timestamps = true;
    protected $fillable = [
        'userId', 'postId', 'dateLike'
    ];

    public function post() {
        return $this->belongsTo(Post::class, 'postId', 'postId');
    }

    public function user() {
        return $this->belongsTo(User::class, 'userId', 'userId');
    } 
   
}

