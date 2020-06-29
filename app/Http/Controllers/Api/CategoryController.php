<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function createCupboard(Request $request)
    {
        return response()->json([
            'all' => $request->all()
        ]);
    }
}
