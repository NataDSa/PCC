<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Doctors extends Model
{
    public function patients()
    {
        return $this->belongsToMany(Patients::class, 'doctors_patients', 'doctor_id', 'patient_id');
    }
}
