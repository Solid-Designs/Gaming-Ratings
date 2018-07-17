const express = require('express');
const mainRouter = require('./routes/mainroutes.js');
// const userRouter = require('./routes/userroutes.js');

const app = express();

app.use(mainRouter);

app.listen(3000, function(){
  console.log('Now listening to port 3000');
});
