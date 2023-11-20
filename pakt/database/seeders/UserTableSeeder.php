<?php

namespace Database\Seeders;
use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('users')->insert([
            'username' => "admin",
            'name' => "admin",
            'email' => "admin@gmail.com",
            'created_at' => date('Y-m-d H:i:s'),
            'password' => '$2y$10$cEi9hIOZkS2.w7TWiDbvl.W9v1Fjg4g741ZjlWCXUIwvrdRtDeSI.',
            'role' => 1
        ]);

    }
}

