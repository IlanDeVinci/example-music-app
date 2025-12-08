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
        /* add slug, title, artist, image, audio, is_visible, play_count */
        Schema::table('tracks', function (Blueprint $table) {
            $table->string('slug')->unique()->after('id');
            $table->string('title')->after('slug');
            $table->string('artist')->nullable()->after('title');
            $table->string('image')->nullable()->after('artist');
            $table->string('audio')->after('image');
            $table->boolean('is_visible')->default(true)->after('audio');
            $table->unsignedBigInteger('play_count')->default(0)->after('is_visible');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
