<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class request_status_seeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('request_status')->insert([
            ['status_name' => 'new'],
            ['status_name' => 'on progress'],
            ['status_name' => 'done'],
        ]);
    }
}
