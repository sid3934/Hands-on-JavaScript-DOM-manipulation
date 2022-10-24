var myParagraphs  = document.getElementsByTagName("p");

for(var i=0; i<myParagraphs.length; i++){
    myParagraphs[i].style.color = "red";
    alert(` showing paragraph ${i} `);
}

var myText = document.querySelector('#special .someclass');
myText.style.color="red";