const API = "https://restcountries.com/v3.1/all";

const countryDiv = document.querySelector('.country');
const currencyDiv = document.querySelector('.currency');
const countries = document.querySelector('#countries');


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

        

        data.forEach(e => {
            
            console.log(mapNestedArrayValue(data, "currencies"));
            
           
            
        });

        console.log(data)
        
      } catch (error) {
        // Handle errors, such as network issues or invalid JSON
        console.error('Error:', error.message);
      }
}

displayCountry();

function mapNestedArrayValue(arr, targetKey) {
    let result;
  
    // Helper function to recursively traverse the array of objects
    function traverseArray(arr) {
      for (const item of arr) {
        if (item && typeof item === 'object') {
          if (item.hasOwnProperty(targetKey)) {
            // Found the target key, store the value and break out of the loop
            result = item[targetKey];
            break;
          } else {
            // Continue recursively if the current item is an object or array
            traverseArray(Object.values(item));
          }
        }
      }
    }
  
    // Start the traversal
    traverseArray(arr);
  
    return result;
  }