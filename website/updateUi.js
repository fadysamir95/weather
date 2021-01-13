/* Function to Update UI */
const updateUI = async () => {
    // Code to fetch from server, use url from get route
    const request = await fetch('/data')
    try {
      // Code to convert json data
      const response = await request.json();
      return response;
      // Code to update UI with the fetched data
      const dateDiv = document.getElementById("date");
      // dateDiv.innerHTML = ;
      const tempDiv = document.getElementById("temp");
      const contentDiv = document.getElementById("content");
    }
    catch (err) {
      // Code to log error
      console.log(error);
    }
};