---
title: NICO LOOPER
date: 2018-12-11 10:08:23
layout: true
---
{% raw %}

<!doctype html>
<html>

<body>
    <video src="https://cdn.jsdelivr.net/gh/novaELLIAS/CDN_for_ND/nico/nico.flv"></video>
</body>

<body>
    <video id="videoID" controls="controls">
        <source src="https://cdn.jsdelivr.net/gh/novaELLIAS/CDN_for_ND/nico/nico.mp4" type="video/mp4" />
    </video>
</body>
<script type="text/javascript">
    window.onload = function () {
        var local1 = document.getElementById('videoID');
        local1.autoplay = true;
        local1.loop = true;
        local1.muted = false;
        if (local1.paused) {
            local1.play();
        } else {
            local1.pause();
        }
    }
</script>

</html>

{% endraw %}