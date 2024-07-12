## Table of Contents
- [Index] (#index.js file)
- [FetchData] (#fetchData.js file)
- [Header] (#header.js file)

## index.js file

creates instances of the classes initialized in the modules when the DOM finished loading.

## fetchData.js file

- Class Data
- Contains the API Key in a constructor
- Contains an asynchronous method fetchData which takes city as an argument, coming from the user in the searchbar input field
- the url is constructed with the base URL, the API KEY and the city 
- the try catch block waits for a response from the server where the fetch function takes the url as an argument 
- returns the data in JSON format and waits for the data being converted to a javascript object 
- if the response is okey (status code in 200 range), the data will be returned else an error will be logged
- if any error occurs it will be caught and null will be returned
- Data class is being exported to be used in other modules

## header.js file

