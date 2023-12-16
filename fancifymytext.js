function biggerFont(){
    document.getElementById("text").style.fontSize = "24px" ;
}
function changeStyles(){
    
    var text = document.getElementById("text");
    var fancyButton = document.getElementById("fancy");

    if(fancyButton.checked){
        text.style.fontWeight = "bold";
        text.style.color = "blue";
        text.style.textDecoration = "underline";
        alert("Fancy Style Change")
    }
    else{
        text.style.fontWeight = "normal";
        text.style.color = 'black';
        text.style.textDecoration = 'none';
        alert("Normal Style Change")
    }
}
function mooStyle() {
    var text = document.getElementById("text");
    
    text.value = text.value.toUpperCase();
    
    var sentences = text.value.split(" ");
    text.value = sentences.join("-Moo ");

    
}

