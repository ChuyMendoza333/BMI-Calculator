const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3001;

// Configure bodyParser to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve the main.css file
app.get('/main.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'main.css'));
});

// Serve the result.css file
app.get('/result.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'result.css'));
});

app.post('/calculate-bmi', (req, res) => {
  const name = req.body.name;
  const weight = parseFloat(req.body.weight);
  const height = parseFloat(req.body.height);
  const bmi = (weight / (height ** 2)) * 10000;
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>BMI Result</title>
      <link rel="stylesheet" href="result.css">
  </head>
  <body>
      <h1>Result</h1>
      <div class="container">
      <h2>Hello ${name}, your BMI is: </h2>
      <p id="bmi-result">${bmi.toFixed(2)}</p>
      </div>
  </body>
  </html>`);
});

app.listen(port, () => {
  console.log(`Express server is listening on port ${port}`);
  console.log(`Go to http://localhost:${port}/ to check the app`);
});

//   // Send the results page with the BMI result
//   res.sendFile(path.join(__dirname, 'result.html'));
// });




// Ruta para manejar el envío del formulario
// app.post('/calculate-bmi', (req, res) => {
//   const weight = parseFloat(req.body.weight);
//   const height = parseFloat(req.body.height);
//   const bmi = (weight / (height ** 2)) * 10000;
//   res.send(`Your BMI is: ${bmi.toFixed(2)}`);
// });

//   if (isNaN(weight) || isNaN(height)) {
//     res.send('Please enter valid values');
//   } else {
//     const bmi = (weight / (height ** 2)) * 10000;
//     res.send(`Tu IMC es: ${bmi.toFixed(2)}`);
//   }
// });

// Iniciar el servidor en el puerto 3000
