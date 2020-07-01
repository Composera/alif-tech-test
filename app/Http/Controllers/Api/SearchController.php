<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Spatie\Searchable\Search;
use Illuminate\Http\Request;
use App\Models\Cupboard;
use App\Models\Cell;
use App\Models\Folder;
use App\Models\File;

class SearchController extends Controller
{
    public function search($text)
    {
        $searchResults = (new Search())
            ->registerModel(Cupboard::class, ['title'])
            ->registerModel(Cell::class, ['title'])
            ->registerModel(Folder::class, ['title'])
            ->registerModel(File::class, function($modelSearchAspect) {
                $modelSearchAspect
                   ->addSearchableAttribute('filename') // return results for partial matches on usernames
                   ->with('parent');
         })
            ->perform($text);

        return response()->json([
            'search' => $searchResults->groupByType()
        ]);
    }
}
