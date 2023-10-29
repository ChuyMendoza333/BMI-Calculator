const express = require('express');
const ejs = require('ejs');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});



// Handle POST request to the BMI calculator
app.post('/calculate-bmi', (req, res) => {
  const name = req.body.name;
  const weight = parseFloat(req.body.weight);
  const height = parseFloat(req.body.height);
  const bmi = ((weight / (height ** 2)) * 10000).toFixed(2);
  res.render('result', { name, bmi });
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
