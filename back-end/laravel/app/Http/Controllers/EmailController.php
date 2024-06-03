<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\RequestMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class mailController extends Controller
{
    public function sendEmail(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'phone' => 'required|string|max:255',
            'doctor' => 'required|string|max:255',
            'request' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $details = $request->only(['name', 'phone', 'doctor', 'request']);

        Mail::to('skry.emir9@gmail.com')->send(new RequestMail($details));

        return response()->json(['success' => 'Email sent successfully!'], 200);
    }
}
