---
layout: false
---
{% raw %}

<!doctype html>
<html>

<head>
	<meta charset="utf-8">
	<title>地獄通信</title>
	<meta name="renderer" content="webkit">
	<meta http-equiv="renderer" content="webkit">
	<link rel="shortcut icon" href="https://cdn.jsdelivr.net/gh/novaELLIAS/CDN_for_ND/enma/btn.png">
	<link rel="bookmark" href="https://cdn.jsdelivr.net/gh/novaELLIAS/CDN_for_ND/enma/btn.png">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/novaELLIAS/CDN_for_ND/enma/style.css" type="text/css">
	<link type="text/css" rel="stylesheet" href="https://cdn.jsdelivr.net/gh/novaELLIAS/CDN_for_ND/enma/style.css" />
</head>

<body>
	<div id="clock">
		<a class="clockh">Not Found</a>
		<hr noshade="noshade">
	</div>
	<div id="fire">
		<video id="animate" width="160" height="320" onended="FireEnd()">
			<source src="https://cdn.jsdelivr.net/gh/novaELLIAS/CDN_for_ND/enma/hono.mp4" type="video/mp4" />
		</video>
	</div>
	<div id="start">
		<div id="title">
			<a>あなたの怨み、晴らします。</a>
		</div>
		<form id="hell" name="hell" action="index.htm" onSubmit="return CheckInput();">
			<input id="nickname" name="nickname" maxLength="44"><br>
			<input id="btn_send" type="submit" value="送 信">
		</form>
	</div>
	<div id="end">
		<div id="end_logo"></div>
		<a class="end_h">この怨み、地狱へ流します！</a><br>
	</div>
	<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/novaELLIAS/CDN_for_ND@2.2.10/enma/work.js"
		charset="UTF-8"></script>
	<script type="text/javascript" src="https://tajs.qq.com/stats?sId=54859600" charset="UTF-8"></script>
</body>

</html>

{% endraw %}