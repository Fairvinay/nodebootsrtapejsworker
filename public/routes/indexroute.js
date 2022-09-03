const { v4: uuid} = require('uuid')
const creatError = require('http-errors')
const JSONdb = require('simple-json-db')
var path = require('path');
var url  = require('url');
var fs   = require('fs');

const db = new JSONdb(process.env.JSON_DB_PATH, { asyncWrite: true })

 var options = {  //path.join(__dirname, '')
    root: process.env.FILE_PATH , //path.resolve(__dirname+'../..'),
    dotfiles: 'allow',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }

exports.home = async(req, res, next) => { 
  try { 
     console.log("Inside home function ")
    const { requestBody } = req.body 
     console.log(" requestBody ",requestBody)
    // this is just a demo code and not for prod 
    //db.set(email, JSON.stringify({id: uuid(), username: `Demo username ${uuid()}`, password }))
    //res.status(201) 
    var filPath =  path.resolve(__dirname+'../../../index.html')
  console.log("filePath "+filPath );
    var fileName= 'index.html'
   var url_parts = url.parse(req.url);
   console.log(url_parts);
    console.log(url_parts.pathname);
   var upath= url_parts.pathname;
   var part = upath.substring(upath.lastIndexOf('/')+1);
    console.log("url last part " +part  );
   var fileResolve = path.resolve(part);
   
   console.log("url fileResolve " +fileResolve  );
   
   var fileExists = fs.existsSync(fileResolve)
    if(fileResolve && fileExists ){
	
         var actualFilewithExt = fileResolve.substring(fileResolve.lastIndexOf('\\')+1);
 	console.log("actualFilewithExt  " +actualFilewithExt );
	fileName = actualFilewithExt
	  res.sendFile( fileName, options , function(err) {
		 if (err) {
		console.log('Error: ', err)
   		   next(err)
  	         } else {
    		   console.log('Sent:', fileName)
   		 }
    	       });


      } 
     else {
	 next({message: 'file not found '}) 
      }
   }
   catch (error) 
    { 
       console.log(" home function error ")
       const typeH = (typeof next);
       console.log("typeof next", typeH );
       if(typeH === "function"){
		 next(error) 
	}
     
   } 
}


exports.register = async(req, res, next) => { 
  try { 
   /* console.log("Inside Register function ")
    const { email , password } = req.body 
    // this is just a demo code and not for prod 
    db.set(email, JSON.stringify({id: uuid(), username: `Demo username ${uuid()}`, password }))
    res.status(201) 
    res.send('Account created successfully') 
   */
   }
   catch (error) 
    { 
      next(error) 
   } 
}