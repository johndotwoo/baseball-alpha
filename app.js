$(document).ready(function() {
	var result = $.ajax({
		url: "https://erikberg.com/mlb/standings/20140727.json",
		dataType: "jsonp",
		type: "GET",
		success: function(results){
			console.log(results);
		}
	})
});