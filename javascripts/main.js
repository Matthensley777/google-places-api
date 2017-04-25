console.log("Javascript loading");

$(document).ready(function(){
	
	const apiKey = "";

	$("body").on("click","li", (e) => {
		loadPlaces(e.target.innerHTML).then((data) => {
			console.log(data);
		}).catch((error) => {
			console.log(error);
		});
	});
		const loadPlaces = (droptDownType) => {
			return new Promise((resolve, reject) => {
				$.ajax(`https://maps.googleapis.com/maps/api/place/textsearch/xml?query=500&type=${dropdownType}&restaurants+in+Sydney&key=${apiKey}`)
			.done((data) => resolve(data))
			.fail((error) => fail(error));
			
			});
		}	
	});

