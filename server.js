const express = require('express');

const app = express();

app.use(express.json());

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

// Route to check if a number is prime
app.post('/is-prime', (req, res) => {
    const { number } = req.body;
    // typeof to check the input is number
    if (typeof number !== 'number') {
        return res.status(400).json({ error: 'Input must be a number.' });
    }
    const result = isPrime(number);
    res.json({ number, isPrime: result });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});