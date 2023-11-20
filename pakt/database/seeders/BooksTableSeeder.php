<?php

namespace Database\Seeders;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class BooksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();

        for ($i = 0; $i < 100; $i++) {
            \DB::table('books')->insert([
                'title' => $faker->sentence,
                'author' => $faker->name,
                'publication_date' => $faker->date,
                'isbn' => $faker->isbn13,
                'description' => $faker->paragraph,
                'genre' => $faker->word,
                'publisher' => $faker->company,
            ]);
        }
    }
}

