const API = "https://restcountries.com/v3.1/all";

const countryDiv = document.querySelector('.country');
const currencyDiv = document.querySelector('.currency');
const countries = document.querySelector('#countries');
const convertedDiv = document.querySelector('.converted');

const displayCountry = async () =>{
    try {
        const response = await fetch(API);
    
        // Check if the request was successful (status code 200-299)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        // Parse the JSON data from the response
        const data = await response.json();
    
        data.forEach(e => {
            const countryOption = document.createElement("option");
            countryOption.value = e.name.common;
            countryOption.innerHTML = e.name.common;
            countries.appendChild(countryOption);
            // console.log(e.name.common);
        });

        // Convert HTMLCollection to an array
        const optionArray = Array.from(countries.getElementsByTagName("option"));

        // Sort the array alphabetically based on innerHTML
        optionArray.sort((a, b) => a.innerHTML.localeCompare(b.innerHTML));

        countries.innerHTML = "";
        // Append sorted options to the select element
        optionArray.forEach((option) => {
            countries.appendChild(option);
        });

        
        

        
      } catch (error) {
        // Handle errors, such as network issues or invalid JSON
        console.error('Error:', error.message);
      }
}

displayCountry();

const getCurrency = async (country) => {


    let countryAPI = `https://restcountries.com/v3.1/name/${country}`;

    try {
        // Make a GET request to the API endpoint
        const response = await fetch(countryAPI);
    
        // Check if the request was successful (status code 200-299)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        // Parse the JSON data from the response
        const data = await response.json();
    
        // Use the data or perform other actions
        data.forEach(e => {
            // currencyDiv.innerHTML += e.currencies;
            // console.log(e.currencies)

            let myObject = e.currencies;
            

            for (const key in myObject) {
                if (myObject.hasOwnProperty(key)) {
                  const obj = myObject[key];
                  currencyDiv.innerHTML = `${obj.name} symbol: ${obj.symbol}`
                  // console.log(obj.name +" "+obj.symbol);
                }
              }
        });
        
      } catch (error) {
        // Handle errors, such as network issues or invalid JSON
        console.error('Error:', error.message);
      }
}

let rate = 0.443625;

const convertCurrency = () => {
  let Php = inputValue.value * rate;

  convertedDiv.innerHTML = "Converted Value: ₱ " + Php;
  
  
}

