<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;


class Product extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'description', 'category', 'price', 'photo'];
    public function newProduct()
    {
        $newproduct = DB::table('products')->orderByDesc('id', 'DESC')->get()->take(8);
        // dd($newproduct);
        return ($newproduct);
    }
}