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
	for (let i in pages)
		if (pages[i].name == pageName)
			return pages[i];
}
function populatePage(page){
	vrb.title.html("Teddybear Studio - " + page.name);
	vrb.headline.html(makeTag(page.headline));
	var html ="";
	for (let i in page.body)
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
	else if(tag.type=="button")
		return "<"+tag.type+getId(tag.content)+getClass("navButton")+"onclick='changePage(this)'>"+tag.content+"</"+tag.type+">";
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
	for (let i in pages){
		html+= makeTag({content:pages[i].name,type:"button"});
	}
	nav.html(html);
}