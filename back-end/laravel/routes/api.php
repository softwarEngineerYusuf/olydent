<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Doctors;
use App\Http\Controllers\DoctorsController;
use App\Models\Randevu;
use App\Http\Controllers\RandevuController;
use App\Mail\AppointmentMail;
use App\Http\Controllers\AppointmentController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//Doctors
Route::get('doctors', function(Request $request) {
    $Doctors = Doctors::all();
    return $Doctors;

});
Route::get('/doctors/{id}',[DoctorsController::class, 'index']);
Route::post('/doctors/',[DoctorsController::class, 'store']);
Route::put('/doctors/{id}',[DoctorsController::class, 'update']);
Route::delete('/doctors/{id}',[DoctorsController::class, 'destroy']);

//Randevular
Route::get('randevus', function(Request $request) {
    $Randevu = Randevu::all();
    return $Randevu;

});
Route::get('/randevus/{id}',[RandevuController::class, 'index']);
Route::post('/randevus/',[RandevuController::class, 'store']);
Route::put('/randevus/{id}',[RandevuController::class, 'update']);
Route::delete('/randevus/{id}',[RandevuController::class, 'destroy']);

