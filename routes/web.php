<?php

Route::get('/', 'AppController@index');

Route::get('/photos', 'AppController@getPhotos');
