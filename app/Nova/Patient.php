<?php

namespace App\Nova;

use Illuminate\Http\Request;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Date;
use Laravel\Nova\Fields\Number;
use Laravel\Nova\Fields\BelongsToMany;
use Laravel\Nova\Http\Requests\NovaRequest;

class Patient extends Resource
{
    /**
     * The model the resource corresponds to.
     *
     * @var string
     */
    public static $model = \App\Patients::class;

    /**
     * The single value that should be used to represent the resource when being displayed.
     *
     * @var string
     */
    public static $title = 'Surname';

    /**
     * The columns that should be searched.
     *
     * @var array
     */
    public static $search = [
        'id',
    ];

    /**
     * Get the fields displayed by the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function fields(Request $request)
    {
        return [
            ID::make()->sortable(),
            Text::make('Фамилия', 'Surname'),
            Text::make('Имя', 'Name'),
            Text::make('Отчество', 'MiddleName'),
            Number::make('Номер карты','Card'),
            Number::make('Номер участка', 'LotNumber'),
            BelongsToMany::make('Doctor', 'Doctors'),
            Date::make('Дата рождения','Birthday'),
            Text::make('Диагноз','Diagnosis'),
        ];
    }
}
