window.addEventListener('load', function(event){
var textArea = document. getElementById('textArea');
var button = document. getElementById('tweet');
var message = document.getElementById('message');
var register = moment().format('LT');
var slash = document.getElementById('slash');
//Funcion tweetear
button.addEventListener('click', function(event) {
  var text = textArea.value;
  var box = document.createElement('p');
  if (text === ''){
  event.preventDefault();
  textArea.value = '¡Necesitas llenar este espacio!';
  }else{
  box.textContent = text;
  message.appendChild(box);

}

})

})
