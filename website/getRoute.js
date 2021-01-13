/* Server sends data */
app.get('/data', (req, res) => {
    // Code to send respons data of endpoint object
    res.send(projectData);
})