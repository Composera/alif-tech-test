<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;
use App\Models\Folder;
use App\Models\Cupboard;
use Spatie\Searchable\Searchable;
use Spatie\Searchable\SearchResult;

class Cell extends Model implements Searchable
{
    use Sluggable;
    
    protected $fillable = [
        'title', 'cupboard_id'
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

    public function folders()
    {
        return $this->hasMany(Folder::class, 'cell_id', 'id');
    }

    public function parent()
    {
        return $this->hasOne(Cupboard::class, 'id', 'cupboard_id');
    }
}
