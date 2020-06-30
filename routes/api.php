<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/create/cupboard', 'Api\CupboardController@createCupboard');
Route::get('/get/cupboards', 'Api\CupboardController@all');
Route::post('/delete/cupboard/{id}', 'Api\CupboardController@destroy');
Route::get('/get/cupboards', 'Api\CupboardController@all');
