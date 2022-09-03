import ('./cool.js')
 const cost= ( function () 
      { 
        let cnt = 0; 
        return function () { 
		     cool();
                return ++cnt;
               }; 
    })();
 
