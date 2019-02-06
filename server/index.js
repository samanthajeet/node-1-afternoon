 const express = require('express');
 const bodyParser = require('body-parser');
 const ctrl = require('./controller')

 const app = express();

 app.use( bodyParser.json() );
 app.use( express.static( __dirname + '/../public/build' ) );

 //Create
 app.post('/api/message' , ctrl.create)

 //Read
 app.get('/api/messages' , ctrl.read)


 //Update
 app.put('/api/messages/:id' , ctrl.update)


 //Delete
 app.delete('/api/messages/:id' , ctrl.delete)







 app.listen(3001, () => console.log('Houston we have lift off from Port 3001'))