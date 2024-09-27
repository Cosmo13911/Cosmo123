const nameElement = document.getElementById("nameElement");
nameElement.addEventListener("click", function(){
    nameElement.classList.toggle("large-text");
});

const face = document.getElementById("face");
face.addEventListener("click", function(){
    face.classList.toggle("large-face");
});