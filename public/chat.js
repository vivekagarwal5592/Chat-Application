
// let io = require('socket.io-client');
let socket = io.connect('http://localhost:4000')

let message = document.getElementById('message');
    handle = document.getElementById('handle');
    btn = document.getElementById('send');
    output = document.getElementById('output');
    feedback = document.getElementById('feedback');

    btn.addEventListener('click',()=>{

socket.emit('chat',{
	message:message.value,
	handle:handle.value
});

    });

    socket.on('chat',(data)=>{
    	feedback.innerHTML = ""
output.innerHTML += '<p>' + data.handle + ':' + data.message + '</p>'

    })

    message.addEventListener('keypress',()=>{
socket.emit('typing',handle.value)
    })

    socket.on('typing',(data)=>{
    	if(feedback.innerHTML == ""){
feedback.innerHTML += '<p><em>' +data+ " is typing a message" + '</em></p>'
    	}

    })
