

class ApiErrorHandler { 
   message ="";
   ejs; 

  /*constructor(msg, esjTemp){ 
    this.message = msg;
    this.ejs = ejsTemp;
  } 
  */
   constructor(){ 

    this.message = 'I catch Error';
    this.ejs = global.myEjs;
  } 
  
  setEjsTemp (et)  { 
     this.ejs= et;
  } 
 
  static badRequest(req, res, next) { 
    
  } 

} 

module.exports = new ApiErrorHandler();