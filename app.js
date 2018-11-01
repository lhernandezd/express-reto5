const express = require('express');
const app = express();

//Settings
app.set('view engine', 'pug');
app.set('views' , 'views');

const array = [];
for (let i = 1; i<= 50; i++) {
  if (i % 2 == 0) {
    array.push(`${i} Soy Par!`)
  } else {
    array.push(`${i} Soy Impar!`)
  };
};

//Ruta
app.get('/', (req,res) => {
  res.render('index', {numbers: array})
});

//Puerto
app.listen(3000, () => {
  console.log('Listening on port 3000!');
})