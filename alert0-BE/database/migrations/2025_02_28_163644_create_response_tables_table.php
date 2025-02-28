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
        Schema::create('response_tables', function (Blueprint $table) {
            $table->id();
            $table->string('type');
            $table->unsignedBigInteger('current_response_location_id');
            $table->unsignedBigInteger('request_id');
            $table->unsignedBigInteger('vehicle_id');
            $table->unsignedBigInteger('responders_id');
            $table->unsignedBigInteger('status_id');
            $table->foreign('current_response_location_id')->references('id')->on('locations');
            $table->foreign('request_id')->references('id')->on('request_tables');
            $table->foreign('vehicle_id')->references('id')->on('vehicle_tables');
            $table->foreign('responders_id')->references('id')->on('users');
            $table->foreign('status_id')->references('id')->on('response_status');
            $table->datetime('dispatch_time');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('response_tables');
    }
};
