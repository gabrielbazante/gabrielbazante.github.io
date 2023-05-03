const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

var countMobile = 1;
var countMobileBD = 1;
var countWeb = 1;
var countWebArbo = 1;
var countWebMV = 1;
document.getElementById("radioMobile1").checked = true;
document.getElementById("radioWeb1").checked = true;
document.getElementById("radioWebArbo1").checked = true;
document.getElementById("radioMobileBD1").checked = true;
document.getElementById("radioWebMV1").checked = true;

setInterval( function() {
    nextImage(); 
}, 5000);


function nextImage(){
    countMobile++;
    countWeb++;
    countWebArbo++;
    countMobileBD++;
    countWebMV++;
    if(countMobile > 8) countMobile = 1;
    if(countWeb > 6) countWeb = 1;
    if(countWebArbo > 5) countWebArbo = 1;
    if(countMobileBD > 9) countMobileBD = 1;
    if(countWebMV > 2) countWebMV = 1;

    document.getElementById("radioMobile"+countMobile).checked = true;
    document.getElementById("radioWeb"+countWeb).checked = true;
    document.getElementById("radioWebArbo"+countWebArbo).checked = true;
    document.getElementById("radioMobileBD"+countMobileBD).checked = true;
    document.getElementById("radioWebMV"+countWebMV).checked = true;

}

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

menu_item.forEach(item=>{
    item.addEventListener('click',()=>{
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});


