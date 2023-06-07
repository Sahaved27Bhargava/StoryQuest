var image = document.getElementById("i1");
var images = ["images/img-1.jpg", "images/img-2.jpg", "images/img-7.jpg","images/img-4.jpg","images/img-5.jpg"];
var index = 0;
function updateImage() {
i1.src = images[index];
index = (index + 1) % images.length;
}
setInterval(updateImage, 3000);

function arjit() {
  var arjit = $("#arjit");
  var singer = $("#singer");

  arjit.click(function(){
    arjit.text("SELECTED!!");
    singer.text("ARJITH SINGH Selected");
  });
  
}

function AP() {
  var AP = $("#AP");
  var singer = $("#singer");

  AP.click(function(){
    AP.text("SELECTED!!");
    singer.text("AP DILHON Selected");
  });
  
}