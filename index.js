const express = require('express');  // server side
//import express from 'express';  // client side (react)

const app = express();

app.get('/', (req, res) => {
  res.send({hi: 'there'});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
