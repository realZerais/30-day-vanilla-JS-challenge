const API = "http://localhost:3001/pokemons";

var renderPokemons = document.querySelector('.pokemons');

const displayPokemons = () => {

// Using Fetch to make a GET request
fetch(API)
  .then(response => {
    // Check if the request was successful (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the response as JSON
    return response.json();
  })
  .then(data => {
    // Handle the JSON data

    data.forEach(e => {
        console.log(e.name);
        renderPokemons.innerHTML += `<br>${e.name}`;
    });
    console.log(data);
  })
  .catch(error => {
    // Handle errors
    console.error('Fetch error:', error);
    });

};


displayPokemons();








