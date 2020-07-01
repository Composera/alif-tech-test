<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class File extends Model
{
    public const FILE_URL = 'uploads/file_images/';
    
    protected $fillable = [
        'folder_id'
    ];

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
}
