<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/categories', [CategoryController::class,'index'])->name('admin.categories');
Route::post('/category/create', [CategoryController::class,'create'])->name('admin.category.create');
Route::get('/category/:id', [CategoryController::class,'view'])->name('admin.category.delete');
Route::post('/category/update', [CategoryController::class,'update'])->name('admin.category.update');
Route::post('/category/delete', [CategoryController::class,'delete'])->name('admin.category.delete');


Route::get('/products', [ProductController::class,'index'])->name('admin.products');
Route::post('/product/create', [ProductController::class,'create'])->name('admin.product.create');
Route::get('/product/:id', [ProductController::class,'view'])->name('admin.category.delete');
Route::post('/product/update', [ProductController::class,'update'])->name('admin.product.update');
Route::post('/product/delete', [ProductController::class,'delete'])->name('admin.product.delete');
