const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Fake database (can be replaced with MySQL or MongoDB)
let contactSubmissions = [];

app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    // Here you can insert data into a real database
    contactSubmissions.push({ name, email, message });
    console.log(contactSubmissions);

    res.json({ message: 'Contact form submitted successfully!' });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
