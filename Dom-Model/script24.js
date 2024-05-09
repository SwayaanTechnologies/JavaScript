const express = require('express');
    const app = express();
    const port = 3000;

    app.use(express.static('public'));

    app.post('/mouseout', (req, res) => {
    console.log('Mouse is out!');
    // Handle the mouseout event here
    res.sendStatus(200); // Send a response back to the client
    });

    app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    });