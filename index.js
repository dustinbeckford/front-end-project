const searchButton = document.querySelector("#searchbutton");
const carContainer = document.querySelector("#car-container");
searchButton.addEventListener("click", () => searchForVehicle());

async function searchForVehicle() {
  const searchMake = document.querySelector("#searchmake").value;
  const searchModel = document.querySelector("#searchmodel").value;
  const searchYear = document.querySelector("#searchyear").value;
  carContainer.innerText = "";
  const carResults = await fetch(
    `https://api.api-ninjas.com/v1/cars?limit=2&model=${searchModel}&make=${searchMake}&year=${searchYear}`,
    {
      method: "GET",
      headers: {
        "X-Api-Key": "gAUaIgs/cTbSFFQiiYAl3A==PKXn6hFVATNOWhgO",
        "Content-Type": "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    }
  );
  const json = await carResults.json();
  json.forEach((car) => {
    console.log(car.fuel_type);

    const carInfo = document.createElement("div");
    carInfo.className = "car-container-div"
    const carImage = document.createElement("img");
    carImage.src = "";
    carImage.src = `https://source.unsplash.com/random/?${searchMake},${searchModel}`;
    carImage.className = "car-image"
    const carYear = document.createElement("h3");
    carYear.innerText = `Car Year: ${car.year}`;
    const carMake = document.createElement("h3");
    carMake.innerText = `Car Make: ${car.make}`;
    const carModel = document.createElement("h3");
    carModel.innerText = `Car Mode: ${car.model}`;
    const carFuelType = document.createElement("h3");
    carFuelType.innerText = `Car Fuel Type:${car.fuel_type}`;
    const carTransmisson = document.createElement("h3");
    carTransmisson.innerText = `Car Transmission: ${car.transmission}`;
    const cardrive = document.createElement("h3");
    cardrive.innerText = `Car Drive:  ${car.drive}`;
    const carCityMpg = document.createElement("h3");
    carCityMpg.innerText = `City MPG:  ${car.city_mpg}`;
    const carHighwayMpg = document.createElement("h3");
    carHighwayMpg.innerText = `Highway MPG:  ${car.highway_mpg}`;
    const carComboMpg = document.createElement("h3");
    carComboMpg.innerText = `Total MPG:  ${car.combination_mpg}`;
    const carClass = document.createElement("h3");
    carClass.innerText = `Car Class:  ${car.class}`;
    const carCylinders = document.createElement("h3");
    carCylinders.innerText = `Total Cylinders: ${car.cylinders}`;
    const carDisplacement = document.createElement("h3");
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
    //Appending Big container made on HTML to Div with Varibles Created Above
    carContainer.append(carInfo);
  });
}
