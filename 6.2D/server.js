const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;

app.get('/add', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).send("Invalid input");
    }
    const sum = a + b;
    res.status(200).send(`The sum of ${a} and ${b} is: ${sum}`);
});

const checkAllowedParams = (req, res, next) => {
    const allowedParams = ['num_a', 'num_b']; 
    const receivedParams = Object.keys(req.query);
    const invalidParams = receivedParams.filter(param => !allowedParams.includes(param));
    if (invalidParams.length > 0) {
        return res.status(400).json({ 
            error: 'Invalid Parameters',
            invalidParams: invalidParams 
        });
    }
    next();
};

app.get('/multiplication', checkAllowedParams, (req, res) => {
    const a = parseFloat(req.query.num_a);
    const b = parseFloat(req.query.num_b);
    console.log(req.query)
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).send("Error: Please provide valid numbers");
    }
    const mul = a * b;
    res.status(200).send(`The multiplication of ${a} and ${b} is: ${mul}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
