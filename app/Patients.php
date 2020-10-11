<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Patients extends Model
{
    protected $casts = [
        'Birthday' => 'date'
    ];

    public function doctors()
    {
        return $this->belongsToMany(Doctors::class, 'doctors_patients', 'patient_id', 'doctor_id');
    }
}
