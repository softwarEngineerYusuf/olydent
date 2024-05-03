<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Doctors;

class DoctorsController extends Controller
{
    public function index($id)
    {
        $Doctors = Doctors::find($id);

        if(!$Doctors){
            return response()->json(['error' => 'Doctor not found'], 404);
        }

        return response()->json($Doctors);
  
    }

//Create
    public function store(Request $request)
{
    $validatedData = $request->validate([
        'name' => 'required',
        'surname' => 'required',
        'phone_number' => 'required',
        'area_of_expertise' => 'required',
    ]);

    $Doctors = Doctors::create($validatedData);

    return response()->json(['message' => 'Doctor created successfully', 'Doctor' => $Doctors]);
}

public function show($id)
{
    $Doctors= Doctors::findOrFail($id);

    return response()->json(['Doctor' => $Doctors]);
}

/**public function index()
{
    $customers = Customer::all();

    return response()->json(['customers' => $customer]);
}
*/

//Update

public function update(Request $request, $id)
{
    $validatedData = $request->validate([
        'name' => 'required',
        'surname' => 'required',
        'phone_number' => 'required',
        'area_of_expertise' => 'required',
    ]);

    $Doctors = Doctors::findOrFail($id);
    $Doctors->update($validatedData);

    return response()->json(['message' => 'Doctor updated successfully', 'Doctor' => $Doctors]);
} 

//Delete
public function destroy($id)
{
    $Doctors = Doctors::findOrFail($id);
    $Doctors->delete();

    return response()->json(['message' => 'Doctor deleted successfully']);
} 

}
