var button = document.querySelector(".drop-button");
var locationName = document.querySelector(".location-name");

function getLocation() {
	var locationArray = [
		"Anvil",
		"Array",
		"Asylum",
		"Boxing Gym",
		"Cargo Docks",
		"Construction Site",
		"Diner",
		"Estates",
		"Factory",
		"Firing Range",
		"Fracking Tower",
		"Graveyard",
		"Hydro Dam",
		"Lighthouse",
		"Nuketown Island",
		"Pavilion",
		"Rivertown",
		"The 'Burbs (six houses)",
		"Train Station",
		"Turbine"
	];
	var randomLocation = locationArray[Math.floor(Math.random() * locationArray.length)];
	locationName.innerHTML=randomLocation;
}


button.addEventListener("click", function(event) {
	getLocation();
	event.preventDefault();
});





