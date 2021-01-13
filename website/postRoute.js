/* Server receive data */
app.post('/data', (req, res) => {
    projectData.temp = req.body.temp;
})