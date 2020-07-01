<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;
use App\Models\Cell;
use Spatie\Searchable\Searchable;
use Spatie\Searchable\SearchResult;

class Cupboard extends Model implements Searchable
{
    use Sluggable;

    protected $fillable = [
        'title'
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

    public function cells()
    {
        return $this->hasMany(Cell::class, 'cupboard_id', 'id')->orderBy('id', 'desc');
    }
}
