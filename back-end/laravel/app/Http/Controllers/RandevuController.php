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

// public function submit(Request $request)
// {
//     // Validate the submitted data
//     $validatedData = $request->validate([
//         'name' => 'required|string',
//         'phone' => 'required|string',
//         'doctor' => 'nullable|string',
//         'request' => 'nullable|string',
//     ]);

//     // Send email with appointment details
//     try {
//         Mail::to('skry.emir9@email.com')->send(new AppointmentMail($validatedData));
//     } catch (\Exception $e) {
//         return response()->json(['error' => 'Failed to send email: ' . $e->getMessage()], 500);
//     }

//     // If you're expecting a JSON response, you should return JSON
//     return response()->json(['success' => 'Appointment submitted successfully!']);
// }


public function testEmail()
{
    try {
        Mail::to('skry.emir9@gmail.com')->send(new AppointmentMail());
        return response()->json(['message' => 'Test email sent successfully']);
    } catch (\Exception $e) {
        Log::error('Error sending email: ' . $e->getMessage());
        return response()->json(['message' => 'Error sending email'], 500);
    }
}















//Create
    public function store(Request $request)
{
    $validatedData = $request->validate([
        'name' => 'required|string',
        'phone' => 'required|string',
        'doctor' => 'nullable|string',
        'request' => 'nullable|string',
    ]);

    $Randevu = Randevu::create($validatedData);

    try {
        Mail::to('skry.emir9@gmail.com')->send(new AppointmentMail($Randevu));
    } catch (\Exception $e) {
        // Log error or handle failure gracefully
        \Log::error('Error sending email: ' . $e->getMessage());
    }

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
        'name' => 'required|string',
        'phone' => 'required|string',
        'doctor' => 'nullable|string',
        'request' => 'nullable|string',
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
