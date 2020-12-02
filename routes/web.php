<?php

//Route::view('/{path?}', 'app');

Route::get('{reactRoutes}', function () {
    return view('app'); // your start view
})->where('reactRoutes', '^((?!api).)*$'); // except 'api' word