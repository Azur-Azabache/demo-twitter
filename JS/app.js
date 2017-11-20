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
  textArea.value = '¡Necesitas llenar este espacio!';
  }else{
  box.innerHTML = text + '\n' + register;
  message.appendChild(box);
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

})
