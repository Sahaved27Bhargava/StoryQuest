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

function malik() {
  var malik = $("#malik");
  var singer = $("#singer");

  malik.click(function(){
    malik.text("SELECTED!!");
    singer.text("Arman Malik Selected");
  });
  
}

function king() {
  var king = $("#king");
  var singer = $("#singer");

  king.click(function(){
    king.text("SELECTED!!");
    singer.text("king Selected");
  });
  
}

function siddhu() {
  var siddhu = $("#siddhu");
  var singer = $("#singer");

  siddhu.click(function(){
    siddhu.text("SELECTED!!");
    singer.text("Siddhu Selected");
  });
  
}

function shubh() {
  var shubh = $("#shubh");
  var singer = $("#singer");

  shubh.click(function(){
    shubh.text("SELECTED!!");
    singer.text("shubh Selected");
  });
  
}

function COLE() {
  var COLE = $("#COLE");
  var connected = $("#connected");

  COLE.click(function(){
    COLE.text("connected!!");
    connected.text("J COLE Selected");
  });
  
}
function juice() {
  var juice = $("#juice");
  var connected = $("#connected");

  juice.click(function(){
    juice.text("connected!!");
    connected.text("Juice WRLD is connected");
  });
  
}
function xxx() {
  var xxx = $("#xxx");
  var connected = $("#connected");

  xxx.click(function(){
    xxx.text("connected!!");
    connected.text("XXX TENTCTAC is connected");
  });
}
function ariana() {
  var ariana = $("#ariana");
  var connected = $("#connected");

  ariana.click(function(){
    ariana.text("connected!!");
    connected.text("Ariana is connected");
  });
  
}
function the() {
  var the = $("#the");
  var connected = $("#connected");

  the.click(function(){
    the.text("connected!!");
    connected.text("THE WEEKEND is connected");
  });
  
}
function BILIE() {
  var BILIE = $("#BILIE");
  var connected = $("#connected");

  BILIE.click(function(){
    BILIE.text("connected!!");
    connected.text("BILIE EILISH is connected");
  });
  
}

