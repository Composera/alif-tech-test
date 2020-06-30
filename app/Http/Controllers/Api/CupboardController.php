<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Cupboard;

class CupboardController extends Controller
{
    public function createCupboard(Request $request)
    {
        $request->validate([
            'title' => 'required|unique:cupboards'
        ]);

        Cupboard::create($request->all());

        return response()->json([
            'all' => $request->all()
        ]);
    }

    public function all()
    {
        return response()->json([
            'cupboards' => Cupboard::orderBy('id', 'desc')->get()
        ]);
    }

    public function destroy($id)
    {
        $cupboard = Cupboard::findOrFail($id);
        $cupboard->delete();
        
        return response()->json([
            'cupboards' => Cupboard::orderBy('id', 'desc')->get()
        ]);
    }
}
