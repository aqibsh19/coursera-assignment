(function(window) {
  var helloSpeaker = {} ;
  var speakWord = "Hello";
  helloSpeaker.speak = function (name) {
<<<<<<< HEAD
    console.log(speakWord + " " +name);
=======
    console.log(speakWord + " " + name); 
>>>>>>> ab55c5b4630156887793bad657c9fe0192e057a1
  }

  window.helloSpeaker = helloSpeaker;
}(window));
