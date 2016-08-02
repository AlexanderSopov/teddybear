$(document).ready(function(){

	var activeTab = "auroria";

	//solves a bug in bootstrap when using .fade on tabs
	$('#myTabs a:last').tab("show");
	setTimeout(function(){
		$('#myTabs a:first').tab("show");
	},150);

	// Change between the different models of beds in the tab-menu
	$('#myTabs a').click(function (e) {
		activeTab = $(this).attr("aria-controls");
	});

	// Change the different colors in 
	$(".colorThumbs button").click(function (e){
		var animationTime = 240,
		path = "img/"+ activeTab +"/" + this.id + "-md.png",
		elt = "#"+activeTab+"BigPic";

		$(elt).fadeOut(animationTime);
		setTimeout(function(){
			$(elt).attr("src", path);
			$(elt).fadeIn(animationTime);	
		},animationTime);
	})

});