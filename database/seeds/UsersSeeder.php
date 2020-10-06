<?php

use Illuminate\Database\Seeder;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'SNS',
            'email' => 'sns@test.ru',
            'password' => bcrypt('password')
        ]);
    }
}
