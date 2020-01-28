var request=require('request');
/*var url='https://api.darksky.net/forecast/3e71db97ca6e8d13101f51ef894fbddb/37.8267,-122.4233';

request({url:url},(error,response)=>
    {
         var data=JSON.parse(response.body)
         console.log(data.currently);
    });*/

//geocoding
var url1='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWFuaWttYW5nbGEiLCJhIjoiY2s1dGlhNDJqMDJpZTNqbnB5Zjhpbm11ZCJ9.NvlcYxq4wrUMV4RH2WKgXw'    
request({url:url1,json:true},(error,response)=>
    {
         //var data=JSON.parse(response.body)
         var latitude=response.body.features[0].center[1];
         var longitude=response.body.features[0].center[0];
         console.log(latitude,longitude);
    });