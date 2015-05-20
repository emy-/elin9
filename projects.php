<!DOCTYPE html>

<html>
	<head>
		<title>Emy Lin - Projects</title>
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

				<div id="main-menu" class="menu">
					<ul>
						<li><a href="index4.php">About</a></li>
						<li id="proj-tab"><a href="projects.php">Projects</a></li>
						<li><a href="contact.php">Contact</a></li>
					</ul>
				</div>
			</div>

			<?php include "inc/project-menu.inc" ?>
			<div id="project-menu" class="menu">
				<ul>
					<li><a href="http://csug.rochester.edu/u/elin9/whitebored.html" target="_blank">WhiteBored</a></li>
					<li><a href="shutterstock_intern.php">Shutterstock Internship</a></li>
					<li><a href="rhema.php">RHEMA</a></li>
					<li><a href="https://sites.google.com/site/rochciteammia" target="_blank">HCI Class Project</a></li>
					<li><a href="http://emy-lin.rochestercs.org/project3/index.php" target="_blank">Web Design Class Project</a></li>
				</ul>
			</div>

			<div class="content-proj" id="content-projects">
				<div>
					<a href="rhema.php">
						<img src="images/rhema.jpg" alt="Rhema on Google Glass" class="proj-img alignleft">
					</a>
					<p class="alignleft-txt">Rhema is a Google Glass-based application to help people with public speaking in real time. 
						Read more about this research project <a href="rhema.php">here</a>.</p>
				</div>

				<div>
					<a href="shutterstock_intern.php">
						<img src="images/shutterstock.jpg" alt="Shutterstock logo" class="proj-img alignleft">
					</a>
					<p class="alignleft-txt">This summer (2015), I will be a UX Research Intern at Shutterstock! 
						Take a look at what I'll be doing <a href="shutterstock_intern.php">here</a>.</p>
				</div>

				<div>
					<a href="https://sites.google.com/site/rochciteammia" target="_blank">
						<img src="images/MIS.png" alt="Mind Input System" class="proj-img alignleft">
					</a>
					<p class="alignleft-txt">The Mind Input System (MIS) is the name of our group project for our HCI course. MIS allows users to type without a mouse, keyboard, or any other phsyical inputs by using an EEG headset and a smart on screen keyboard interface.
						Visit the project site <a href="https://sites.google.com/site/rochciteammia" target="_blank">here</a>.</p>
				</div>

				<div>
					<a href="http://emy-lin.rochestercs.org/project3/index.php" target="_blank">
						<img src="images/4AWiC.png" alt="4 Awesome Women in Computing logo" class="proj-img alignleft">
					</a>
					<p class="alignleft-txt">The final project of the Web Design course involved creating a webpage on a person who made significant contributions to the Web or computing, and then compiling three other classmate's HTML files with yours and your CSS styling.
						View the final project <a href="http://emy-lin.rochestercs.org/project3/index.php" target="_blank">here</a>.</p>
				</div>

				<div>
					<a href="http://csug.rochester.edu/u/elin9/whitebored.html" target="_blank">
						<img src="images/whitebored.png" alt="WhiteBored" class="proj-img alignleft">
					</a>
					<p class="alignleft-txt">WhiteBored is a collaborative drawing app that mimics those shared white boards in school hallways. It is an ongoing personal project.
						Play around with the project <a href="http://csug.rochester.edu/u/elin9/whitebored.html" target="_blank">here</a>.</p>
				</div>
			</div>

			<?php include "inc/footer.inc" ?>
			<footer>
				<p>This site is currently under construction.</p>
				<p>©2015 Emy Lin</p>
			</footer>
		</div>

		<script src="http://code.jquery.com/jquery.js"></script>
		<script src="js/menu-highlighter.js"></script>
		<script src="js/menu-highlighter-project.js"></script>
	</body>
</html>