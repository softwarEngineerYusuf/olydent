<?php

namespace App\Mail;

use App\Models\Randevu;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class AppointmentMail extends Mailable
{
    use Queueable, SerializesModels;

    // public $randevu;
    

    // public function __construct(Randevu $randevu)
    // {
    //     $this->randevu = $randevu;
    // }

    // public function build()
    // {
    //     return $this->subject('New Appointment')
    //                 ->markdown('emails.appointment', ['randevu' => $this->randevu]);
    // }

    public function build()
    {
        return $this->subject('Test Email')
                    ->view('emails.test');
    }
}
