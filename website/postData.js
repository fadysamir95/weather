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
      return;
    }
    catch (err) {
      // Code to log error
      console.log(error);
    }
};
postData('/data', );