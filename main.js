function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/nn_JL-7pl/model.json",modelLoaded);
}
function modelLoaded(){
    classifier.classify(gotResults);
}
function gotResults(errror,results){
    console.log(results);
}
