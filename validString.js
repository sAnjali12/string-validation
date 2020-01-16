var express = require('express');
const path = require("path")
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/valid',function(req,res){
    res.sendFile(path.join(__dirname+'/valid.html'));
});



app.post("/validation",(req,res)=>{
    var string=req.body.string;
    var uni = "";
    var counter = 0;
    for (var i = 0; i < string.length; i++) {
      if (string.lastIndexOf(string[i]) == string.indexOf(string[i])) {
        uni += string[i];
        counter ++;
    }
  }
  if(counter==0){
    res.send("string is valid")
  }else{
    res.send("No")
    }
})

const port = 2000
app.listen(port,()=>
   console.log(`my server is listning port....${port}`)
);

  
  