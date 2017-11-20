window.addEventListener('load', function(event){
var textArea = document. getElementById('textArea');
var button = document. getElementById('tweet');
var message = document.getElementById('message');
var register = moment().format('LT');
var slash = document.getElementById('slash');
var number = document.getElementById('number');

//Funcion tweetear
button.addEventListener('click', function(event) {
  var text = textArea.value;
  var box = document.createElement('p');
  if (text === ''){
    event.preventDefault();
    textArea.value = 'Necesitas rellenar este espacio!';
  }else{
    box.innerHTML = text + '\n' + register;
    message.appendChild(box);
    var newChild = message.firstChild;
    message.insertBefore(box,newChild);
}
})

//Funcion contadora de carácteres
textArea.addEventListener('keyup', function(){
  var counter = 140 - (document.getElementById('textArea').value.length);
  document.getElementById('number').textContent = counter;
  if (counter <= 120){
    number.style.color = 'red';
  } else if (counter <= 130){
    number.style.color = 'blue';
  } else if(counter >130){
    number.style.color = '#088A85';
  }
  })
//Funcion para detectar click
textArea.addEventListener('focus', function(event){
  slash.style.border = '2px solid #088A85';
  button.style.backgroundColor = '#2ECCFA';
})
//funcion para detectar el blur
textArea.addEventListener('blur', function(event){
  slash.style.border = '1px solid #E6E6E6';
  button.style.backgroundColor = '#BDBDBD';

})

})
