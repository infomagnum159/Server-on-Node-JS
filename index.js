const express = require('express');
const app = express();
const port = 8000;
const Vigenere = require('caesar-salad').Vigenere;
const password = "password";

// app.get('/:name',  (req, res) => {
//     res.send( req.params.name);
// });


app.get('/encode/:password', (req, res) => {
    res.send(Vigenere.Cipher(password).crypt(req.params.password));
});

app.get('/decode/:password', (req, res) => {
    res.send(Vigenere.Decipher(password).crypt(req.params.password));
});

app.listen(port, () => {
    console.log('We are live on port:' + port);
});