<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;
use App\Models\File;
use App\Models\Cell;
use Spatie\Searchable\Searchable;
use Spatie\Searchable\SearchResult;

class Folder extends Model implements Searchable
{
    use Sluggable;

    protected $fillable = [
        'title', 'cell_id'
    ];

    public function getSearchResult(): SearchResult
    {
        return new SearchResult(
            $this,
            $this->title
        );
    }
    
    /**
     * Return the sluggable configuration array for this model.
     *
     * @return array
     */
    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'title'
            ]
        ];
    }

    public function parent()
    {
        return $this->hasOne(Cell::class, 'id', 'cell_id')->with('parent');
    }

    public function files()
    {
        return $this->hasMany(File::class, 'folder_id', 'id');
    }
}
