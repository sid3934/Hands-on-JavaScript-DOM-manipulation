(function(){
    "use strict"
    var imgFolder = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg", "images/image4.jpg", "images/image5.jpg"];
        var imgNo = 0;
        document.getElementById('next').onclick = nextPhoto;
        function nextPhoto(){
            imgNo++;
            if(imgNo>imgFolder.length-1){ imgNo=0;}
            document.getElementById('dispImg').src = imgFolder[imgNo];
        }
        document.getElementById('previous').onclick = prevPhoto;
        function prevPhoto(){
            imgNo--;
            if(imgNo<0){ imgNo = imgFolder.length-1;}
            document.getElementById('dispImg').src = imgFolder[imgNo];
        }
}())