/** @format */

const searchButton = document.querySelector("#searchbutton");
const carContainer = document.querySelector("#car-container");
searchButton.addEventListener("click", () => searchForVehicle());

async function searchForVehicle() {
	const searchMake = document.querySelector("#searchmake").value;
	const searchModel = document.querySelector("#searchmodel").value;
	const searchYear = document.querySelector("#searchyear").value;

	// clears inner text so that it doesn't stack subsequent requests
	carContainer.innerText = "";

	const url = `https://api.api-ninjas.com/v1/cars?limit=2&model=${searchModel}&make=${searchMake}&year=${searchYear}`;
	const opts = {
		method: "GET",
		headers: {
			"X-Api-Key": "gAUaIgs/cTbSFFQiiYAl3A==PKXn6hFVATNOWhgO",
			"Content-Type": "application/json",
			"Content-Type": "application/x-www-form-urlencoded",
		},
		redirect: "follow",
		referrerPolicy: "no-referrer",
	};
	const carResults = await fetch(url, opts);
	const json = await carResults.json();

	if (!json.error && json.length > 0) {
		const car = json[0];
		const carInfo = document.createElement("div");
		carInfo.className = "car-container-div";

		// image
		const carImage = document.createElement("img");
		carImage.src = "";
		carImage.src = `https://source.unsplash.com/random/?${searchMake},${searchModel}`;
		carImage.className = "car-image";

		// year
		const carYear = document.createElement("h5");
		carYear.innerText = `Car Year: ${car.year}`;

		// make
		const carMake = document.createElement("h5");
		carMake.innerText = `Car Make: ${car.make}`;

		// model
		const carModel = document.createElement("h5");
		carModel.innerText = `Car Mode: ${car.model}`;

		// fuel type
		const carFuelType = document.createElement("h5");
		carFuelType.innerText = `Car Fuel Type: ${car.fuel_type}`;

		// trans
		const carTransmisson = document.createElement("h5");
		var transText = "Automatic";
		if (car.transmission.toLowerCase() !== "a") {
			transText = "Manual";
		}
		carTransmisson.innerText = `Car Transmission: ${transText}`;

		// drive
		const cardrive = document.createElement("h5");
		cardrive.innerText = `Car Drive:  ${car.drive.toUpperCase()}`;

		// city mpg
		const carCityMpg = document.createElement("h5");
		carCityMpg.innerText = `City MPG:  ${car.city_mpg}`;

		// highway mpg
		const carHighwayMpg = document.createElement("h5");
		carHighwayMpg.innerText = `Highway MPG:  ${car.highway_mpg}`;

		// combo mpg
		const carComboMpg = document.createElement("h5");
		carComboMpg.innerText = `Total MPG:  ${car.combination_mpg}`;

		// class
		const carClass = document.createElement("h5");
		carClass.innerText = `Car Class:  ${car.class}`;

		// cylinders
		const carCylinders = document.createElement("h5");
		carCylinders.innerText = `Total Cylinders: ${car.cylinders}`;

		// displacement
		const carDisplacement = document.createElement("h5");
		carDisplacement.innerText = `Displacement in Liters:  ${car.displacement}`;

		// Appending Varibles to Div Created Above
		carInfo.append(
			carYear,
			carMake,
			carModel,
			carFuelType,
			carTransmisson,
			cardrive,
			carCityMpg,
			carHighwayMpg,
			carComboMpg,
			carCylinders,
			carDisplacement,
			carClass,
			carImage
		);

		// Appending Big container made on HTML to Div with Variables Created Above
		carContainer.append(carInfo);
	} else {
		const errorElement = document.createElement("h2");
		if (json.length === 0) {
			errorElement.innerText = "No results found";
		} else {
			errorElement.innerText = `Error: ${json.error}`;
		}
		carContainer.append(errorElement);
	}
}
