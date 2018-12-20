<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>IRC-like Chat Tutorial from Voerro</title>

    <link rel="stylesheet" href="/css/app.css">
</head>
<body>
<div id="app">
    <vue-chat :channels="{{ $channels }}"></vue-chat>
</div>

<script src="/js/app.js"></script>
</body>
</html>