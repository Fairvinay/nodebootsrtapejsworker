this porject adds UI routes if not caught 

show's the basic UI with header foot and main content from ejs template in partials 

the ejs template uses semantic-ui/2.4.1/semantic.min.css

it also use's .env to identify the routes directory to be served from 


this also take bootstaps js and css are included using 

express as static modules 
express.static(__dirname + '/node_modules/bootstrap/dist/js')

this explains how workers can be created by asking user how many to create 
http://localhost:3000/nQueen.html
the url is 

any other url is met with default EJS template 


