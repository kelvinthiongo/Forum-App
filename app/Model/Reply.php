<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Reply extends Model
{
    public function question()
    {
        return $this->belongsTo(Question::class);
    }

    public function user()
    {
        return $this->belongsTo(App\User::class);
    }

    public function likes()
    {
        return $this->hasMany(Like::class);
    }
}
