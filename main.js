function translateWord() {
  var wordToConvert = document.getElementById('word').value;
  console.log(wordToConvert);


  var xhr = new XMLHttpRequest();
  xhr.open("GET" , "https://eda-te-reo.herokuapp.com/api/translate?word=" + wordToConvert, false);
  xhr.send();

  var translatedWord = xhr.responseText;

  document.getElementById('otherWord').value = translatedWord;

}
