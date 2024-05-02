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
        Schema::create('pwaas', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('name-surname');
            $table->bigInteger('phone_number');
            $table->id('doctor_id');
            $table->id('service_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pwaas');
    }
};
