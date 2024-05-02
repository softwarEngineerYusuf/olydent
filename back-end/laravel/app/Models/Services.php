<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Services extends Model
{
    use HasApiTokens, HasFactory;

    protected $fillable = [
        'treatment_plans',
    ];
}
