<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Shift extends Model
{
    protected $table = 'SHIFTS';
    protected $primaryKey = 'id';
    public $timestamps = false;

    protected $fillable = ['shift', 'date', 'called', 'called_at', 'service_id'];

    public function service(): BelongsTo
    {
        return $this->belongsTo(Service::class, 'service_id');
    }
}
