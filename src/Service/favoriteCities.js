let cities = [
  "kamloops",
  "tehran",
  "vancouver",
  "toronto",
  "calgary",
  "kelowna",
];

function searchCity(city) {
  return cities.includes(city);
}

function addCity(city) {
  if (cities.includes(city)) return;
  else {
    cities.push(city.toLowerCase());
    cities.sort();
  }
}

function removeCity(city) {
  cities.splice(cities.indexOf(city), 1);
}

function getCities() {
  return cities;
}

export { searchCity, addCity, getCities, removeCity };
