const socket = io('http://localhost:8000');

const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp')
const messageContainer = document.querySelector('.container')

var audio_send = new Audio('iphone_send_sms.mp3');
var audio_receive = new Audio('sms_iphone.mp3');

const append = (message, position) => {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
    if (position == 'left')
        audio_receive.play();
    else
        audio_send.play();
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.value;
    append(`You : ${message}`, 'right');
    socket.emit('send', message);
    messageInput.value = ''
})

const name = prompt("Enter Your Name To Join The Chat");
socket.emit('new-user-joined', name);

socket.on('user-joined', name => {
    append(`${name} has joined the chat...!`, 'right')
})

socket.on('receive', data => {
    append(`${data.name} :${data.message}`, 'left')
})
socket.on('left', name => {
    append(`${name} left the chat`, 'left')
})