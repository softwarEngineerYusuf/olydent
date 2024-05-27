<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Randevu;

class RandevuController extends Controller
{
    public function index($id)
    {
        $Randevu = Randevu::find($id);

        if(!$Randevu){
            return response()->json(['error' => 'Randevu not found'], 404);
        }

        return response()->json($Randevu);
  
    }
//submit

    public function submit(Request $request)
    {
        // Validate the submitted data
        $validatedData = $request->validate([
            'name' => 'required|string',
            'phone' => 'required|string',
            'doctor' => 'nullable|string',
            'request' => 'nullable|string',
        ]);

        // Send email with appointment details
        Mail::to('skry.emir9@email.com')->send(new AppointmentMail($validatedData));

        // Redirect back with success message
        return redirect()->back()->with('success', 'Appointment submitted successfully!');
    }







//Create
    public function store(Request $request)
{
    $validatedData = $request->validate([
        'name-surname' => 'required',
        'phone' => 'required',
        'doctor' => 'optional',
        'request' => 'optional',
    ]);

    $Randevu = Randevu::create($validatedData);
    return response()->json(['message' => 'Randevu created successfully', 'Randevu' => $Randevu]);
}

public function show($id)
{
    $Randevu = Randevu::findOrFail($id);

    return response()->json(['Randevu' => $Randevu]);
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
        'name-surname' => 'required',
        'phone' => 'required',
        'doctor' => 'optional',
        'request' => 'optional',
    ]);

    $Randevu = Randevu::findOrFail($id);
    $Randevu->update($validatedData);

    return response()->json(['message' => 'Randevu updated successfully', 'Randevu' => $Randevu]);
} 

//Delete
public function destroy($id)
{
    $Randevu = Randevu::findOrFail($id);
    $Randevu->delete();

    return response()->json(['message' => 'Randevu deleted successfully']);
} 
}
