// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Global Variables
const apiKey = '&appid=f005470fa72f05fa913a08a49918fae5&units=metric';
const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const generateButton = document.getElementById("generate");
const dateDiv = document.getElementById("date");
const tempDiv = document.getElementById("temp");
const contentDiv = document.getElementById("content");

// Event listener to add function to existing HTML DOM element
generateButton.addEventListener('click', performAction);
/* Function called by event listener */
function performAction() {
  const zipInput = document.getElementById("zip");
  const feelingsInput = document.getElementById("feelings").value;
  if (zipInput.value === '') {
    alert('Please insert the zip code');
  }
  else {
    getData().then(function(data) {
      console.log(data);
      // Add data to post request
      postData('/data', {
        date: d,
        temp: data.list[0].main.temp,
        content: feelingsInput
      });
      updateUI();
    });
    // getData().then((data) => postData('/data', data)).then(() => updateUI);
  }
};

/* Function to GET data from API */
// const getData = async () => {
//   const request = await fetch (
//     baseUrl + `?zip=${zipInput.value}&appid=${apiKey}&units=metric`
//   );
//   try {
//     //Code to convert json data and return result (await conversion)
//     const response = await request.json();
//     return response;
//   }
//   catch (error) {
//       // Code to log error
//       console.log("error", error);
//   }
// }

/* Function to GET data from API */
const getData = async (baseUrl, zipInput, apiKey) => {
  const request = await fetch(baseUrl + zipInput + apiKey);
  try {
      const response = await request.json();
      return response;
  }
  catch (error) {
      console.log("error");
  }
};

/* Function to POST data */
const postData = async (url = "", data = {}) => {
  // Code to fetch route url and write request method, credentials, headers, and body
  const request = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), 
  });
  try {
    const newData = await response.json();
    return newData;
  }
  catch (error) {
    // Code to log error
    console.log("error", error);
  }
};

// postData("/data", {
//   date: d,
//   temp: data.list[0].main.temp,
//   content: feelingsInput
// })

/* Function to Update UI */
const updateUI = async () => {
  // Code to fetch from server, use url from get route
  const request = await fetch('/data')
  try {
    // Code to convert json data
    const allData = await request.json();
    // Code to update UI with the fetched data
    dateDiv.innerHTML = `Date: ${allData[0].date}`;
    tempDiv.innerHTML = `Temprature: ${allData[0].temp}`;
    contentDiv.innerHTML = `I feel: ${allData[0].content}`;
  }
  catch (error) {
    // Code to log error
    console.log("error", error);
  }
};