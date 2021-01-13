const getData = async () => {
    // Code to fetch data from API (await the fetch)
    const request = await fetch(
        baseUrl + '?zip={zipInput.value}&appid={appKey}&units=metric'
    );
    try {
        //Code to convert json data and return result (await conversion)
        const response = await request.json();
        return response;
    }
    catch (error) {
        // Code to log error
        console.log(error);
    }
};