//grab the current location (URL) of this webpage
var currentPage=document.location.href;

//check each anchor in the nav element...
$("#project-menu a").each(function() {

	//if there's a match...
	if(currentPage.indexOf(this.href) > -1) {

		//add the current class to the anchor
		$(this).addClass("current-proj");
		$("#proj-tab").addClass("current");
	}
});