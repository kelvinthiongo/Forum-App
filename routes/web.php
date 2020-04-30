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
    return view('welcome');
});

Route::get('/tweet', function () {

    try {
        $result = Twitter::getDms(['count' => 20, 'format' => 'array']);
        $result = Twitter::getDms(['count' => 20, 'format' => 'array']);
        foreach ($result['events'] as $item) {
            $sender_id = $item['message_create']['sender_id'];
            $text = $item['message_create']['message_data']['text'];
            print($sender_id);
            print($text);
        }
        $message_create = $result['events'][1]['message_create'];
        $event = Twitter::postDm(['message_create' => json_encode($message_create), 'format' => 'json']);
        dd($message_create);
    } catch (Exception $e) {
        // dd(Twitter::error());
        dd(Twitter::logs());
    }
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::resource('/task', 'TaskController');
