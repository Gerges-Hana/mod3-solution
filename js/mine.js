var imgs = document.querySelectorAll("img"); //nodeList

var fixedBox = document.getElementById("fixedBox");
var smallBox = document.getElementById("smallBox");

var closeBtn = document.getElementById("btnClose");
var prevBtn = document.getElementById("PrevBtn");
var nextBtn = document.getElementById("nextBtn");

for( var i=0;i<imgs.length;i++){
    imgs[i].addEventListener("click",function(){
        var c= eventInfo.target;
        var imgSrc=c.getAttribute("src")
        console.log(imgSrc);
    })
}

