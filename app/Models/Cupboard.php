<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;
use App\Models\Cell;

class Cupboard extends Model
{
    use Sluggable;

    protected $fillable = [
        'title'
    ];

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
