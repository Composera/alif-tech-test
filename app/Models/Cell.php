<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;
use App\Models\Folder;
use App\Models\Cupboard;

class Cell extends Model
{
    use Sluggable;
    
    protected $fillable = [
        'title', 'cupboard_id'
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

    public function folders()
    {
        return $this->hasMany(Folder::class, 'cell_id', 'id');
    }

    public function parent()
    {
        return $this->hasOne(Cupboard::class, 'id', 'cupboard_id');
    }
}
