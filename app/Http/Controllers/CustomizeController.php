<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CustomizeController extends Controller
{
    //
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index()
    {
        $user = Auth::user();
        // dd($user->isAdmin);
        if ($user->isAdmin == 1) {
            return view('Admin.home');
        }
        return view('Customer.trangchu');
    }
}
