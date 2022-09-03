
// example from https://strapengine.com/jwt-authentication-in-nodejs/
// also look 
// https://siddharthac6.medium.com/json-web-token-jwt-the-right-way-of-implementing-with-node-js-65b8915d550e

require('dotenv').config()
 
const express = require('express'); 
const apiErrorHandler = require('./public/error/ApiErrorHandler');
const path = require('path');
const { home } = require('./public/routes/indexroute')

const app = express();
const router = express.Router(); 
  

app.set('views', path.join(__dirname, 'public/views'));
var ejsTemp = app.set('view engine', 'ejs');

apiErrorHandler.setEjsTemp(ejsTemp);
global.myEjs = ejsTemp;

// middlewares 
app.use(express.json()) 
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

// routing 
router.get('/', (res,req ) => { 
       const typeH = (typeof home)
       console.log("typeof home ", typeH );
       if(typeH === "function"){
		home();    	
	}
       } 
      );
app.use('/', home) 
     
// error handling    
//app.use(apiErrorHandler);
app.use((err, req, res, next) => 
    { 
	//apiErrorHandler.badRequest(
       res.render('index',{
		errorMessage : err.message
	});
    })


app.listen(process.env.PORT || 3000, () => { 
       console.log('server is running' , process.env.PORT || 3000) 
  })

process.on('SIGINT' , async() => { 
     process.exit(1) 
   })
