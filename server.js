// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

app.use(bodyParser.json());

app.post('/api/transfer', (req, res) => {
  const formData = req.body;

  // Implement logic based on form data (e.g., initiate transfer, save data to database)
  if (formData.transferType === 'selfOpted') {
    console.log('Initiating Self-Opted Transfer:', formData);
    // Add your transfer logic here for self-opted transfer
  } else if (formData.transferType === 'automated') {
    console.log('Initiating Automated Transfer (Deceased):', formData);
    // Add your transfer logic here for automated transfer (deceased)
  } else {
    console.log('Invalid transfer type:', formData.transferType);
    return res.status(400).json({ success: false, message: 'Invalid transfer type' });
  }

  res.json({ success: true, message: 'Transfer initiated successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
