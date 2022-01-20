// For aligning span elements where we want them
var listOfDisplayElems = document.getElementsByClassName("bodyDisplayElem"), distFromTop = 0;
for(var i = 0; i < listOfDisplayElems.length; i++) {
    listOfDisplayElems[i].style.top = distFromTop + "px";
    distFromTop += listOfDisplayElems[i].getBoundingClientRect().height;
}


// For changing the position of the navbar on scroll
window.addEventListener("scroll", function() {
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if(scrollTop >= document.getElementsByClassName("bodyDisplayElem")[0].getBoundingClientRect().height - 50) {
        document.getElementById("navbar").style.position = "fixed";
        document.getElementById("navbar").style.background = "rgba(76, 0, 39, .95)";
    } else {
        document.getElementById("navbar").style.position = "sticky";
        document.getElementById("navbar").style.background = "inherit";
    }
});

AOS.init(); // Start AOS for animation

// For mobile screens
var openMenu = false;
document.getElementById("icon-bar-div").addEventListener("click", () => {
    if(!openMenu) {
        document.getElementById("mobile-menu").style.zIndex = "10";
        document.getElementById("mobile-menu").style.opacity = "1";
        document.getElementById("menuImgMobile").src = "Images/close.png";
    } else {
        document.getElementById("mobile-menu").style.zIndex = "-1";
        document.getElementById("mobile-menu").style.opacity = "0";
        document.getElementById("menuImgMobile").src = "Images/menu.png";
    }

    openMenu = !openMenu;
});

document.getElementById("mobile-menu").addEventListener("click", () => {
    document.getElementById("mobile-menu").style.zIndex = "-1";
    document.getElementById("mobile-menu").style.opacity = "0";
    openMenu = false;
});