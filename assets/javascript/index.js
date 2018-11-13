var button = document.querySelector(".drop-button");
var locationName = document.querySelector(".location-name");

function getLocation() {
	var locationArray = [
		"Array",
		"Asylum",
		"Cargo Docks",
		"Construction Site",
		"Estates",
		"Factory",
		"Firing Range",
		"Fracking Tower",
		"Hydro Dam",
		"Lighthouse",
		"Nuketown Island",
		"Rivertown",
		"Train Station",
		"Turbine"
	];
	var randomLocation = locationArray[Math.floor(Math.random() * locationArray.length)];
	locationName.innerHTML=randomLocation;
	// console.log("clicked!");
}


button.addEventListener("click", function(event) {
	getLocation();
	event.preventDefault();
});





