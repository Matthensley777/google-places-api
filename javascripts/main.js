console.log("Javascript loading");

$(document).ready(function(){
	
	const apiKey = "";

	$("body").on("click","li", (e) => {
		const type = e.target.innerHTML;
		loadPlaces(type).then((data) => {
			console.log(data);
			let myData = data;
			writePlaceToDom(result);
		}).catch((error) => {
			console.log(error);
		});
	});

	$("body").on("click", ".place", (e) => {
		let place_id = e.target.id;
		loadDetails(place_id).then((result) => {
			console.log(result.formatted_address);
			writeAddressToDom(result.formatted_address);
		});
		console.log(e.target.id);

	});

	const loadDetails = () => {
		return new Promise((resolve, reject) => {
			$.ajax(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${place_id}ChIJN1t_tDeuEmsRUsoyG83frY4&key=${apiKey}`)
			.done((data) => resolve(data.result))
			.fail((error) => reject(error));
		});
	};


		const loadPlaces = (dropDownType) => {
			return new Promise((resolve, reject) => {
				$.ajax(`https://maps.googleapis.com/maps/api/place/nearbysearch/
					json?location=36.174465,-86.767960&radius=50000&type=${dropDownType}&key=${apiKey}`)
			.done((data) => resolve(data.result))
			.fail((error) => fail(error));

			
			});
		};

const writeAddressToDom = (address) => {
	let outPutString = `<div>${address}</div>`;
	$("#addresses").apend(outPutString);

}

const writePlaceToDom = (result) => {
	let outPutString = "";
	for(let i = 0; i < result.length; i++) {
		outPutString += `<a href="#"><div id="${result[i].place_id}" class="place">${result[i].name}</div>`
	}
	$('#input').html(outPutString);
}

	});

