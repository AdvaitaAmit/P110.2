Webcam.set({
    height:300,
    width:300, 
    image_format:'png',
    png_quality:90,
});
camera = document.getElementById("camera");
Webcam.attach("#camera");

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/PR_adMf7Q/model.json",modelLoaded);

function modelLoaded(){
    console.log("The model is loaded");
}

prediction_1="";
prediction_2="";

function speak(){
    var synth=window.speechSynthesis;
    speak_1="The first prediction is"+prediction_1;
    speak_2="The second prediction is"+prediction_2;
    var utterThis= new SpeechSynthesisUtterance(speak_1+speak_2);
    synth.speak(utterThis);
}