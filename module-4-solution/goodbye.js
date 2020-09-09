(function(window) {
    var byeSpeaker = {};
    var speakWord = "Good Bye";
    byeSpeaker.sayBye = function speak(name) {
      console.log(speakWord + " " + byeSpeaker.speak(name));
    }

    window.byeSpeaker = byeSpeaker;
}(window));
