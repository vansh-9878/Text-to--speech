
let speech=new SpeechSynthesisUtterance();

let voices=[];
$(document).ready(function() {
    let voiceSelect = $("select");
    window.speechSynthesis.onvoiceschanged = () => {
        voices = window.speechSynthesis.getVoices();
        voiceSelect.empty();
        voices.forEach((voice, i) => {
            voiceSelect.append($("<option></option>")
                .text(voice.name)
                .val(i));
        });
        speech.voice = voices[0];
    };
});

$(".play").click(function(){
    console.log("hello");
    speech.text=$("textarea").val();
    window.speechSynthesis.speak(speech);
})

$("select").on("change",function(){
    let selectedIndex = $(this).val();
    console.log("Byeee");
    if (voices[selectedIndex]) {
        speech.voice = voices[selectedIndex];
    }
})