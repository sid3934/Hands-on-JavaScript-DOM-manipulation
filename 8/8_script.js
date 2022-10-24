(function(){
    "use strict"
    var imgFolder = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"];
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
