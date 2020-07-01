<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Spatie\Searchable\Searchable;
use Spatie\Searchable\SearchResult;
use App\Models\Folder;

class File extends Model implements Searchable
{
    public const FILE_URL = 'uploads/file_images/';
    
    protected $fillable = [
        'folder_id'
    ];

    public function getSearchResult(): SearchResult
    {
        return new SearchResult(
            $this,
            $this->filename
        );
    }

    public function uploadFile($file)
    {
        if($file == null) return;

        $file_server_name = Str::random(10) . '.' . $file->extension();
        $file->storeAs(self::FILE_URL, $file_server_name);
        $this->file_server_name = $file_server_name;
        $this->filename = $file->getClientOriginalName();
        $this->filetype = $file->getClientMimeType();
        $this->save();
    }

    public function removeFile()
    {
        if($this->file_server_name != null){
            Storage::delete(self::FILE_URL . $this->file_server_name);
            $this->file_server_name = null;
            $this->save();
        }
    }

    public function parent()
    {
        return $this->hasOne(Folder::class, 'id', 'folder_id');
    }
}
