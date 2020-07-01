<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Cupboard;
use App\Models\Cell;

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

    public function destroyCupboard($id)
    {
        $cupboard = Cupboard::findOrFail($id);
        $cupboard->delete();
        
        return response()->json([
            'cupboards' => Cupboard::orderBy('id', 'desc')->get()
        ]);
    }

    public function destroyCell($id)
    {
        $cell = Cell::findOrFail($id);
        $cell->delete();
    }

    public function cupboard($slug)
    {
        $cupboard = Cupboard::where('slug', 'like', '%' . $slug . '%')->with('cells')->firstOrFail();

        return response()->json([
            'cupboard' => $cupboard
        ]);
    }

    public function cupboardCells($id)
    {
        $cupboard = Cupboard::where('id', $id)->with('cells')->firstOrFail();
        
        return response()->json([
            'cells' => $cupboard->cells
        ]);
    }
}
