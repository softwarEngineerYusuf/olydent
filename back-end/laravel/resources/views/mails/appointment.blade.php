@component('mail::message')
# New Appointment

Hello,

You have a new appointment request with the following details:

- **Name**: {{ $randevu->name }}
- **Phone**: {{ $randevu->phone }}
@if ($randevu->doctor)
- **Doctor**: {{ $randevu->doctor }}
@endif
@if ($randevu->request)
- **Request**: {{ $randevu->request }}
@endif

Thank you.

@endcomponent
