<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Dislike extends Model
{
    protected $table = 'dislike';
    protected $primaryKey = 'dislikeId';
    public $timestamps = true;

    protected $fillable = ['userId','postId','dateDislike'];

    public function post() {
        return $this->belongsTo(Post::class, 'postId', 'postId');
    }

    public function user() {
        return $this->belongsTo(User::class, 'userId', 'userId');
    }
}
