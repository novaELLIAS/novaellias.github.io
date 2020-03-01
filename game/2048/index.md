---
layout: false
---
{% raw %}
<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>2048</title>
    <link rel="shortcut icon" type="image/x-icon"
        href="https://cdn.jsdelivr.net/gh/novaELLIAS/CDN_for_ND/img/2048_128px.ico">
    <link rel="stylesheet" type="text/css"
        href="https://cdn.jsdelivr.net/gh/novaELLIAS/CDN_for_ND/js/game/2048/index.css">
    <script type="text/javascript"
        src="https://cdn.jsdelivr.net/gh/novaELLIAS/CDN_for_ND/js/game/2048/jquery.min.js"></script>
    <script type="text/javascript"
        src="https://cdn.jsdelivr.net/gh/novaELLIAS/CDN_for_ND/js/game/2048/support.js"></script>
    <script type="text/javascript"
        src="https://cdn.jsdelivr.net/gh/novaELLIAS/CDN_for_ND/js/game/2048/showanimation.js"></script>
    <script type="text/javascript"
        src="https://cdn.jsdelivr.net/gh/novaELLIAS/CDN_for_ND/js/game/2048/main.js"></script>
</head>

<body ondragstart="window.event.returnValue=false" oncontextmenu="window.event.returnValue=false"
    onselectstart="event.returnValue=false">
    <header>
        <h1>2048</h1>
        <a
            style="font-size:20px;color:white;background-color:rgb(100,167,233);border-radius:6px;padding:3px 8px 8px 8px;">Please operate with arrow keys.</a>
        <a href="" id="newgamebutton">New Game</a>
        <a
            style="font-size:20px;color:white;background-color:rgb(243, 70, 70);border-radius:6px;padding:3px 8px 8px 8px;">score:<span
                id="score">0</span></a>
    </header>
    <div id="grid-container">
        <div class="grid-cell" id="grid-cell-0-0"></div>
        <div class="grid-cell" id="grid-cell-0-1"></div>
        <div class="grid-cell" id="grid-cell-0-2"></div>
        <div class="grid-cell" id="grid-cell-0-3"></div>
        <div class="grid-cell" id="grid-cell-1-0"></div>
        <div class="grid-cell" id="grid-cell-1-1"></div>
        <div class="grid-cell" id="grid-cell-1-2"></div>
        <div class="grid-cell" id="grid-cell-1-3"></div>
        <div class="grid-cell" id="grid-cell-2-0"></div>
        <div class="grid-cell" id="grid-cell-2-1"></div>
        <div class="grid-cell" id="grid-cell-2-2"></div>
        <div class="grid-cell" id="grid-cell-2-3"></div>
        <div class="grid-cell" id="grid-cell-3-0"></div>
        <div class="grid-cell" id="grid-cell-3-1"></div>
        <div class="grid-cell" id="grid-cell-3-2"></div>
        <div class="grid-cell" id="grid-cell-3-3"></div>
    </div>
    <div id="gameover">GAME OVER</div>
</body>
<script>
    document.onkeydown = function (e) {
        var currKey = 0,
            evt = e || window.event;
        currKey = evt.keyCode || evt.which || evt.charCode;
        if (currKey == 123) {
            window.event.cancelBubble = true;
            window.event.returnValue = false;
        }
    }
</script>

</html>
{% endraw %}