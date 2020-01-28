var express=require('express');
var path=require('path');
var app=express();
var request=('request')
const geocode=require('./utils/geocode');
const forecast=require('./utils/forecast');
var publicdirpath=path.join(__dirname,'../public');
app.use(express.static(publicdirpath));

//using handlebars as view engine
var exphbs  = require('express-handlebars');
app.engine('.hbs', exphbs({extname: '.hbs'}));
var hbs = require('hbs');
app.set('view engine', '.hbs');

var partialspath=path.join(__dirname,'../templates/partials');
hbs.registerPartials('./templates/views/partials');



var viewspath=path.join(__dirname,'../templates/views');
app.set('views',viewspath);

//defining partials

app.get('/',(req,res)=>{

  res.render('index',{
    layout: false,
      title:'weather app',
      name:'manik mangla'
  });
});

app.get('/about',(req,res)=>{

    res.render('about',{
      layout: false,
        title:'About me',
        name:'manik mangla'
    });
  });

  app.get('/help',(req,res)=>{

    res.render('help',{
      layout: false,
        title:'Help',
        name:'manik mangla'
    });
  });

  app.get('/weather',(req,res)=>
  {
      if(!req.query.address)
      return res.send({error: 'address not specified...'});

      geocode(req.query.address,(error,{longitude,latitude,location}={})=>
      {
            if(error)
            return res.send({error});  

            forecast(latitude,longitude,(error,forecastdata)=>{
                if(error)
                return res.send({error});

                res.send({
                  forecast:forecastdata,
                  location,
                  address:req.query.address
                })
            });
      });

      
  });
app.listen(5000);