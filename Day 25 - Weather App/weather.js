let country = document.querySelector('.country');
let weather = document.querySelector('.weather');


let countryName;

//returns a country of your location
const getCountry = () => {
    const countryAPI = "https://ipgeolocation.abstractapi.com/v1/?api_key=54a3fde61ecf49e5b533fa8400277715&ip_address=130.105.111.149";

    // Using Fetch to make a GET request
    fetch(countryAPI)
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
    
        // console.log(data.country);
        country.innerHTML += data.country;
        countryName = data.country;

        getWeather(countryName);




      })
      .catch(error => {
        // Handle errors
        console.error('Fetch error:', error);
        });
    
};
    




const getWeather = (countryName) =>{

    const weatherAPI = `http://api.weatherapi.com/v1/current.json?key=dfd3af6cb9274bbeba805320232312&q=${countryName}&aqi=no`;

     // Using Fetch to make a GET request
        fetch(weatherAPI)
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

            console.log(data.current.condition);
            weather.innerHTML += data.current.condition.text;
            weather.innerHTML += `<img src=${data.current.condition.icon}>`;
                



            })
            .catch(error => {
            // Handle errors
            console.error('Fetch error:', error);
            });


}

getCountry();
// const display = (country, weather) =>{
//     getCountry();
//     getWeather();
// }
















