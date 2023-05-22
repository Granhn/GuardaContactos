const express = require('express');
const cors = require('cors');


const app = express();
const PORT = 3000;


//Middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//ROUTES
app.use(require('./routes/router'));



app.listen(PORT) 
console.log('Server on port 3000') 