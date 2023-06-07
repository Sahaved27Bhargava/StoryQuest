const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files from the "public" folder
app.use(express.static('public'));

// Handle the form submission
app.post('/upload', (req, res) => {

  const text = req.body.text;
  console.log('Uploaded text:', text);
  // Add your logic to handle the uploaded text here
  res.send('Text uploaded successfully!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
