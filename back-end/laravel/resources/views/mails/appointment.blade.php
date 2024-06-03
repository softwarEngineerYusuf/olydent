<!-- @component('mail::message')
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

@endcomponent -->


<!DOCTYPE html>
<html>
<head>
    <title>New Request</title>
</head>
<body>
    <h1>New Request Submitted</h1>
    <p><strong>Name:</strong> {{ $details['name'] }}</p>
    <p><strong>Phone:</strong> {{ $details['phone'] }}</p>
    <p><strong>Doctor:</strong> {{ $details['doctor'] }}</p>
    <p><strong>Request:</strong> {{ $details['request'] }}</p>
</body>
</html>
