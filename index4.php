<!DOCTYPE html>

<html>
	<head>
		<title>Emy Lin</title>
		<meta charset="utf-8">
		<link rel="stylesheet" href="css/styles4.css">
		<link href='http://fonts.googleapis.com/css?family=Alegreya+Sans+SC' rel='stylesheet' type='text/css'>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
	</head>

	<body>
		<div class="container">
			<?php include "inc/header.inc" ?>
			<div id="header">
				<div id="name">
					<h1><a href="index4.php">Emy Lin</a></h1>
				</div>

				<div id="main-menu">
					<ul>
						<li><a href="index4.php">About</a></li>
						<li id="proj-tab"><a href="projects.php">Projects</a></li>
						<li><a href="contact.php">Contact</a></li>
					</ul>
				</div>
			</div>

			<div class="content">
				<img id="img-me" src="images/EmyLin_circle.png" alt="Emy Lin">

				<p>Hi there! My name is Emy Lin. I am a rising senior ('16) double majoring in Computer Science and Linguistics at the University of Rochester.
				I am interested in pursuing work or a graduate degree in the field of HCI/UX.
				Currently, I am a research assistant in the Rochester Human Computer Interaction (ROC HCI) research group. 
				This summer (2015), I will be interning at Shutterstock. 
				</p>

				<p class="next-paragraph">Find more information about my activities under <a href="projects.php">Projects</a>.</p>
			</div>

			<?php include "inc/footer.inc" ?>
			<footer class="no-scroll-footer">
				<p>©2015 Emy Lin</p>
			</footer>
		</div>

		<script src="http://code.jquery.com/jquery.js"></script>
		<script src="js/menu-highlighter.js"></script>
	</body>
</html>