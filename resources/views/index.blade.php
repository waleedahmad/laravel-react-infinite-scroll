<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{csrf_token()}}">
    <title>Laravel Infinite Scroll</title>
    <link rel="stylesheet" href="{{mix('/css/app.css')}}">
</head>
<body>
@include('navbar')
<div id="root"></div>
<script src="{{mix('/js/app.js')}}"></script>
</body>
</html>