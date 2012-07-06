<html>
	<head>
		<script type="text/x-mathjax-config">
			MathJax.Hub.Config({
				extensions: ["tex2jax.js"],
				jax: ["input/TeX","output/HTML-CSS"],
				tex2jax: {inlineMath: [["$","$"],["\\(","\\)"]]},
				TeX: { extensions: ["AMSmath.js","AMSsymbols.js"]}
		  });
		</script>
		<style type="text/css">
			#MathJax_Message
			{
			display:none !important;
			}
		</style>
		<script language="javascript" src="js/jquery.js"></script>
		<script type="text/javascript" src="js/mathjax/MathJax.js"></script>
	</head>
	<body>
		<?php if(isset($_GET['content'])){echo $_GET['content'];} ?>
	</body>
</html>
