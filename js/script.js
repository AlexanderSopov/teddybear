window.vrb = {};
$(document).ready(function(){
	vrb.headline = $("#headline"), vrb.body = $("#text"),
	vrb.img = $("#bodyImg"), vrb.title= $("title"), vrb.boxMd=$(".box-md");
	populateNav();
	populatePage(pages[0]);
});
function changePage(link){
	fadeOut(500, function(){
		populatePage(
			getPage(link.id)
		);
	});
}
function fadeOut(time, callback){
	vrb.boxMd.fadeOut(time);
	setTimeout(function(){callback();},time-10)
	setTimeout(function(){
		vrb.boxMd.fadeIn(time)
	},time+10);
}
function getPage(pageName){
	for (var i=0; i<pages.length; i++)
		if (pages[i].name == pageName)
			return pages[i];
}
function populatePage(page){
	vrb.title.html("Teddybear Studio - " + page.name);
	vrb.headline.html(makeTag(page.headline));
	var html ="";
	for (var i=0; i<page.body.length; i++)
		html += makeTag(page.body[i]);
	vrb.body.html(html);
	changeImage(page.img);
}
function makeTag(tag){
	function getId(id){
		return " id='"+id+"'";
	}
	function getClass(classes){
		return "class='"+classes+"'";
	}
	if(tag.type=="a")
		return;
	else if(tag.headline)
		return "<button"+getId(tag.name)+getClass("navButton")+" onclick='changePage(this)'>"+tag.headline.content+"</button>";
	return "<"+tag.type+">"+tag.content+"</"+tag.type+">";
}
function changeImage(img){
	console.log(vrb.img.attr("src"));
	vrb.img.attr("src",encodeURI(img.src));
	vrb.img.attr("alt",img.alt);
	console.log(vrb.img.attr("src"));
}
function populateNav(){
	var nav = $("#nav");
	var html ="";
	for (var i=0; i<pages.length; i++){
		console.log(JSON.stringify(pages[i]));
		html+= makeTag(pages[i]);
	}
	nav.html(html);
}