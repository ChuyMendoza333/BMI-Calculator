const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');

const app = express();
const port = 3001;

// Configure bodyParser to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Set public folder as root
app.use(express.static(path.join(__dirname, 'public')));

// Set 'views' folder as the default templates directory
app.set('/', path.join(__dirname, 'views'));

// Set view engine as EJS
app.engine('ejs', require('ejs').renderFile);

// Set 'ejs' as the default template engine
app.set('view engine', 'ejs');

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/calculate-bmi', (req, res) => {
  const name = req.body.name;
  const weight = parseFloat(req.body.weight);
  const height = parseFloat(req.body.height);
  const bmi = (weight / (height ** 2)) * 10000;
  res.render('result.ejs', { name, bmi });
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
