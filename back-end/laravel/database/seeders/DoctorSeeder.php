<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Doctors;

class DoctorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Doctors::create([
            'name'=> 'Nur Sena',
            'surname'=> 'Arıkan',
            'phone_number'=> '5349580662',
            'area_of_expertise'=> 'Endodonti',
        ]);

        Doctors::create([
            'name'=> 'Asena',
            'surname'=> 'Kadayıf',
            'phone_number'=> '5382571317',
            'area_of_expertise'=> 'Periodontoloji',
        ]);

        Doctors::create([
            'name'=> 'Cansu',
            'surname'=> 'Cambazoğlu',
            'phone_number'=> '5452262030',
            'area_of_expertise'=> 'Protez Uzmanı',
        ]);

        Doctors::create([
            'name'=> 'Mert',
            'surname'=> 'Sakarya',
            'phone_number'=> '5469385269',
            'area_of_expertise'=> 'All',
        ]);

        Doctors::create([
            'name'=> 'Ece',
            'surname'=> 'Karaer',
            'phone_number'=> '5389780099',
            'area_of_expertise'=> 'Ortodonti',
        ]);

        Doctors::create([
            'name'=> 'Hakan',
            'surname'=> 'Kayhan',
            'phone_number'=> '5319385269',
            'area_of_expertise'=> 'All',
        ]);

        Doctors::create([
            'name'=> 'Yasin',
            'surname'=> 'Kaparcı',
            'phone_number'=> '5464778133',
            'area_of_expertise'=> 'All',
        ]);
    }
}
