var io = require('socket.io')(800);

io.on('connection', function(socket){
  console.log('new connection');
  
  
  
  
  socket.on('authreq', function(schooluserpass){
  console.log('user + password:' + schooluserpass);
  var arr = schooluserpass.split(",")
  
  socket.broadcast.emit('(cookie)');
  magisterLogin(arr[0], arr[1], arr[2]);
    });
    
   socket.on('getdata', function(cookie){ 
     socket.broadcast.emit('here\'s your data');
   }); 
    
});

function magisterLogin(school, username, password) {
  new Magister.Magister({
    school: school,
    username: username,
    password: password
  }).ready(function(err) {
    console.log(school + username + password)
  });
}