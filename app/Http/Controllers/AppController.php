<?php

namespace App\Http\Controllers;

use App\Photos;
use Illuminate\Http\Request;

class AppController extends Controller
{
    public function index(){
        return view('index');
    }

    public function getPhotos(){
        return Photos::select('id', 'uri')->paginate(10);
    }
}
