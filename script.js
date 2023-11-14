function speakText() {
    var text = document.getElementById('textToSpeak').value;
    var utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
}