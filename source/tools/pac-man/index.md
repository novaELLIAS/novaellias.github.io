---
layout: false
---

{% raw %}
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf8">
	<title>Pac-Man</title>
	<link rel="shortcut icon" type="image/x-icon" href="https://cdn.jsdelivr.net/gh/novaELLIAS/CDN_for_ND/pac-man/favicon.png">
	<style>
		body {
			background-color: #292929
		}

		* {
			padding: 0;
			margin: 0;
		}

		.wrapper {
			width: 960px;
			margin: 0 auto;
			line-height: 36px;
			text-align: center;
			color: #999;
		}

		canvas {
			display: block;
			background: #000;
		}

		.mod-botton {
			height: 32px;
			padding: 15px 0;
			text-align: center;
		}
	</style>
</head>

<body>

	<div class="wrapper">
		<canvas id="canvas" width="960" height="640">unavailable.</canvas>
		<p>Press [space] or [enter] to pause or continue.</p>
	</div>
	<script src="https://cdn.jsdelivr.net/gh/novaELLIAS/CDN_for_ND/pac-man/game.js"></script>
	<script src="https://cdn.jsdelivr.net/gh/novaELLIAS/CDN_for_ND/pac-man/index.js"></script>
</body>

</html>
{% endraw %}