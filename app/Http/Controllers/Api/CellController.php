<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Validation\Rule;
use Illuminate\Http\Request;
use App\Models\Cell;

class CellController extends Controller
{
    public function createCell(Request $request)
    {
        $request->validate([
            'cupboard_id' => 'required',
            'title' => [
                'required',
                Rule::unique('cells')->where(function ($query) use ($request) {
                    return $query->where('cupboard_id', $request->cupboard_id);
                })
            ],
        ]);
        
        Cell::create($request->all());

        return 'ok';
    }
}
