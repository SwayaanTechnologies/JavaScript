const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;

// Use cookie-parser middleware
app.use(cookieParser());

// Route to set a cookie with custom attributes
app.get('/set-cookie', (req, res) => {
    // Set cookie with custom attributes
    res.cookie('myCookie', 'Hello from cookie!', {
        expires: new Date(Date.now() + 900000), // Expires in 15 minutes (900000 ms)
        httpOnly: true, // Cookie accessible only via HTTP(S) (not JavaScript)
        secure: true, // Cookie sent only over HTTPS
        sameSite: 'strict', // Restricts cookie to same origin requests
        path: '/my-path', // Restricts cookie to a specific path
        domain: 'example.com' // Restricts cookie to a specific domain
    });
    res.send('Cookie set with custom attributes!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
