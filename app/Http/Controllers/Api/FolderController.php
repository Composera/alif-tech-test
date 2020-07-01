<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Models\Folder;
use App\Models\Cell;

class FolderController extends Controller
{
    public function createFolder(Request $request)
    {
        $request->validate([
            'cell_id' => 'required',
            'title' => [
                'required',
                'max:255',
                Rule::unique('folders')->where(function ($query) use ($request) {
                    return $query->where('cell_id', $request->cell_id);
                })
            ],
        ]);

        Folder::create($request->all());
    }

    public function cellFolders($slug)
    {
        $cell = Cell::where('slug', 'like', '%' . $slug . '%')->with(['folders', 'parent'])->firstOrFail();
        
        return response()->json([
            'cell' => $cell
        ]);
    }

    public function destroyFolder($id)
    {
        $folder = Folder::findOrFail($id);
        $folder->delete();
    }
}
