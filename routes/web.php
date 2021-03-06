<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('Customer.trangchu');
});
// Route::get('/{any}', function () {
//     return view('Admin.home');
// })->where('any', '.*');
// Route::view('/{any}', 'product')
//     ->where('any', '.*');
Auth::routes();

Route::get('/admin', 'App\Http\Controllers\CustomizeController@index');
Route::get('/admin-{path}', 'App\Http\Controllers\CustomizeController@index')->where('path', ('[A-Za-z0-9\-]+'));

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');