var io = require('socket.io')(800);
var Magister = require("magister.js");
//var data = require("date");
//require("date");
var express = require("express");
var app = express();
var m;
//var util = require("util");
/* io.on('connection', function(socket){
  console.log('new connection');
console.log("info", "Magister Calendar v5" + " started.\n[*] System Time: " + new Date().toLocaleTimeString() + ", date: " + new Date().toUTCString()); 
  
  
  
  socket.on('authreq', function(schooluserpass){
  console.log('user + password:' + schooluserpass);
  var arr = schooluserpass.split(",")
  
  socket.broadcast.emit('(cookie)');
  magisterLogin(arr[0], arr[1], arr[2]);
    });
    
   socket.on('getdata', function(cookie){ 
     socket.broadcast.emit('here\'s your data');
   }); 
    
}); */

/* async function magisterLogin(school, username, password) {
  m = await new Magister.Magister({
    school: school,
    username: username,
    password: password
  })
    m.appointments(new Date(), new Date(), false, function(err, appointments) {console.log(appointments);});
    //console.log(school + username + password);
    return await m.appointments(new Date(), new Date(), false, function(err, appointments) {a = appointments;});
    
}; */


app.get('/appointments/:data', function (req, res) {
    var arr = req.params.data.split(",")
    m = new Magister.Magister({
    school: arr[0],
    username: arr[1],
    password: arr[2]
  }).ready(function (error) {
    this.appointments(new Date(), new Date(), false, function(err, result) {
        
        var a
        a = ""
        //a += result.length
       //a += "<br>"
        //res.send(result[0].teachers()[0].fullName());
          for (i = 0; i < result.length; i++)
        {
        //    console.log(i);
            a += result[i]._description
            a += "<br>"
        }
    
    res.send(a);
    });
 //   console.log(i + a)
  //  res.send(i + a);
      

      
      
  });
  
  
    
});

app.listen(3000);