$(".name").click(function(){  //Sort by Name function
	if($(".podcast").hasClass("hide")) {
		$(".byName").removeClass("hide");
	}
  else{
  	$(".byPodcast").addClass("hide");
  	$(".byName").removeClass("hide");
  }
});

$(".podcast").click(function(){  //Sort by Podcast function
	if($(".name").hasClass("hide")) {
		$(".byPodcast").removeClass("hide");
	}
  else{
  	$(".byName").addClass("hide");
  	$(".byPodcast").removeClass("hide");
  }
});