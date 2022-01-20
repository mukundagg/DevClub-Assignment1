var listOfDisplayElems = document.getElementsByClassName("bodyDisplayElem"), distFromTop = 0;
    for(var i = 0; i < listOfDisplayElems.length; i++) {
        listOfDisplayElems[i].style.top = distFromTop + "px";
        distFromTop += listOfDisplayElems[i].getBoundingClientRect().height;
}