// Import dependencies
const express = require('express');
const path    = require('path');
// Load our JSON data (array of blends)
const blends  = require('./data/items.json');

// Create Express app
const app = express();
const PORT = process.env.PORT || 3000;

// ------------------------------------------------------------------
// 1) STATIC FILE SERVING
//    Serve everything under /public at the web root ("/")
//    So requests for /index.html, /css/styles.css, etc. work automatically
// ------------------------------------------------------------------
app.use('/', express.static(path.join(__dirname, 'public')));

// ------------------------------------------------------------------
// 2) API ROUTE
//    GET /api/blends
//    Respond with our JSON array of coffee blends.
// ------------------------------------------------------------------
app.get('/api/blends', (req, res) => {
  res.json(blends);
});

// ------------------------------------------------------------------
// 3) START SERVER
//    Listen on the specified PORT and log a message when ready.
// ------------------------------------------------------------------
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
