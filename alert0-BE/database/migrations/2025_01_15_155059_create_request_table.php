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
        Schema::create('request_table', function(Blueprint $table){
            $table->id();
            $table->foreignId('reporter_id')->constrained('users');
            $table->string('type');
            $table->foreignId('location_id')->constained('locations');
            $table->foreignId('status_id')->constrained('request_status');
            $table->dateTime('requested_on');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('request_table');
    }
};
