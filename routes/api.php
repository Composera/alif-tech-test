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
Route::get('/get/cupboard/{slug}', 'Api\CupboardController@cupboard');
Route::get('/get/cupboard/{id}/cells', 'Api\CupboardController@cupboardCells');
Route::get('/get/folder/{slug}/files', 'Api\FolderController@folderFiles');
Route::post('/delete/cupboard/{id}', 'Api\CupboardController@destroyCupboard');
Route::post('/delete/cell/{id}', 'Api\CupboardController@destroyCell');
Route::post('/delete/folder/{id}', 'Api\FolderController@destroyFolder');
Route::post('/create/cell', 'Api\CellController@createCell');
Route::post('/create/folder', 'Api\FolderController@createFolder');
Route::get('/get/cell/{slug}/folders', 'Api\FolderController@cellFolders');
Route::post('/upload/file', 'Api\FolderController@uploadFile');
Route::get('/delete/{id}/file', 'Api\FolderController@deleteFile');
Route::get('/search/{text}', 'Api\SearchController@search');
