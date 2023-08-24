const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3049;

// Apply CORS middleware
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));


app.get('/api', (req, res) => {
    res.json({ message: 'API response' });
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
