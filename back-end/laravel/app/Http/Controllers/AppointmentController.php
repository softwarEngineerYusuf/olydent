<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\AppointmentMail;

class AppointmentController extends Controller
{
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
}
