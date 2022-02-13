
// Get the letter element and add an input listener
var letter = document.getElementById('letter');
var message = document.getElementById('message');
letter.addEventListener('click', (e) => {
  letter.classList.remove('letter');
  letter.classList.add('close');

  message.classList.remove('close');
  message.classList.add("message")
  console.log('Hello World!');
})

message.addEventListener('click', (e) => {
  message.classList.remove('message');
  message.classList.add('close');

  letter.classList.remove('close');
  letter.classList.add("letter")
  console.log('Hello World!');
})

