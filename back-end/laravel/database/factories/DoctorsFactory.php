<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Doctors>
 */
class DoctorsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return $Doctors = [
            [
                'name'=> 'Nur Sena',
                'surname'=> 'Arıkan',
                'phone_number'=> '5349580662',
                'area_of_expertise'=> 'Endodonti',
            ],
            [
                'name'=> 'Asena',
                'surname'=> 'Kadayıf',
                'phone_number'=> '5382571317',
                'area_of_expertise'=> 'Periodontoloji',
            ],
            [
                'name'=> 'Cansu',
                'surname'=> 'Cambazoğlu',
                'phone_number'=> '5452262030',
                'area_of_expertise'=> 'Protez Uzmanı',
            ],
            [
                'name'=> 'Mert',
                'surname'=> 'Sakarya',
                'phone_number'=> '5469385269',
                'area_of_expertise'=> 'All',
            ],
            [
                'name'=> 'Ece',
                'surname'=> 'Karaer',
                'phone_number'=> '5389780099',
                'area_of_expertise'=> 'Ortodonti',
            ],
            [
                'name'=> 'Hakan',
                'surname'=> 'Kayhan',
                'phone_number'=> '5319385269',
                'area_of_expertise'=> 'All',
            ],
            [
                'name'=> 'Yasin',
                'surname'=> 'Kaparcı',
                'phone_number'=> '5464778133',
                'area_of_expertise'=> 'All',
            ],
        ];
    }
}
