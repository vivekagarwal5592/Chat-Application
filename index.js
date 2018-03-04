let express = require('express')
let socket = require('socket.io')


let app = express()
let server = app.listen(4000,()=>{
 	console.log('Welcome user')
 });

app.use(express.static('public'))


let io = socket(server)
io.on('connection',(socket)=>{
 	console.log('I am connected')
 	socket.on('chat',(data)=>{
 		io.sockets.emit('chat',data)

 	});

 	socket.on('typing',(data)=>{
socket.broadcast.emit('typing',data)
 	});
 });

//let s = io.connect('http://localhost:4000')