import config from "../conf/index.js";

async function init() {
  //Fetches list of all cities along with their images and description
  console.log("From init()");
  console.log(config.backendEndpoint + '/cities');
  let cities = await fetchCities();
  console.log(cities);

  //Updates the DOM with the cities
  cities.forEach((key) => {
    addCityToDOM(key.id, key.city, key.description, key.image);
  });
}

//Implementation of fetch call
async function fetchCities() {
  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the data
  try {
    let response = await fetch(config.backendEndpoint + '/cities');
    let data = await response.json();
    return data;
  } catch {
    return null;
  }

}

//Implementation of DOM manipulation to add cities
function addCityToDOM(id, city, description, image) {
  // TODO: MODULE_CITIES
  // 1. Populate the City details and insert those details into the DOM
  let div = document.getElementById("data");
  div.innerHTML += `<div class="col-12 col-sm-6 col-lg-3 mb-4">
  <a href=pages/adventures/?city=${id} id=${id}>
    <div class="tile">
      <img src="${image}" alt="${id}" class="rounded img-fluid"/>
      <div class="tile-text text-center">
        <h5>${city}</h5>
        <p>${description}</p>
    </div>
    </div>
</a>
</div>`
}

export { init, fetchCities, addCityToDOM };
