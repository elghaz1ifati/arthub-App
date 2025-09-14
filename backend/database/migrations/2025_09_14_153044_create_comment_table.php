<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('comment', function (Blueprint $table) {
            $table->id('commentId');
            $table->bigInteger('userId')->unsigned();
            $table->foreign('userId')->references('userId')->on('user');
            $table->bigInteger('postId')->unsigned();
            $table->foreign('postId')->references('postId')->on('post');
            $table->datetime('dateComment');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('comment');
    }
};
