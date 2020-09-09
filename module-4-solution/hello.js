(function(window) {
  var helloSpeaker = {} ;
  var speakWord = "Hello";
  helloSpeaker.sayHello = function speak(names) {
    console.log(speakWord + " " + helloSpeaker.speak(names)); 
  }

  window.helloSpeaker = helloSpeaker;
}(window));
