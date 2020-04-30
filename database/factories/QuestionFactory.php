<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Category;
use App\Model\Question;
use App\User;
use Faker\Generator as Faker;

$factory->define(Question::class, function (Faker $faker) {
    $title = $faker->sentence;
    return [
        'title' => $title,
        'body' => $faker->text,
        'slug' => str_replace(' ', '-', $title), //str_slug($title),
        'category_id' => function(){
            return Category::all()->random();
        },
        'user_id' => function(){
            return User::all()->random();
        },
    ];
});
