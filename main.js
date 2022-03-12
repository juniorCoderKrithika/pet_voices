function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/nn_JL-7pl/model.json",modelLoaded);
}
function modelLoaded(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if (error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("result_label").innerHTML="I can hear - " + results[0].label;
        document.getElementById("result_confidence").innerHTML="Accuracy - " + (results[0].confidence * 100).toFixed(2)+" %";

        
        img=document.getElementById("image_display");

        if(results[0].label == "Barking"){
            img.src="puppy.png";
        }else if(results[0].label == "Meowing"){
            img.src="kitten.png";
        }
        else if(results[0].label == "Mooing"){
            img.src="cow.png";
        }
        else if(results[0].label == "Roaring"){
            img.src="lion.png";
        }else{
            img.src="ear.png";
        }
    }
}