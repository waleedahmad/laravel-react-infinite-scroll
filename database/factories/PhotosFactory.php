<?php

use Faker\Generator as Faker;

$factory->define(App\Photos::class, function (Faker $faker) {
    return [
        'uri' => $faker->imageUrl(640, 480, 'cats', true)
    ];
});
