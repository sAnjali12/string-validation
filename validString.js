var express = require('express');
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json())






app.post("/validation",(req,res)=>{
    var string=req.body.string;
    var uni = "";
    var counter = 0;
    for (var i = 0; i < string.length; i++) {
      if (input.lastIndexOf(string[i]) == string.indexOf(string[i])) {
        uni += string[i];
        console.log(uni)
        counter ++;
    }
  }
  response.then((data)=>{
        res.json(data)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    }).catch((err)=>{
        res.send(err)
    })
    res.send(user_name)
    
})

const port = 2000
app.listen(port,()=>
   console.log(`my server is listning port....${port}`)
);

  
  