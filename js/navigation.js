var nav=document.getElementById("navbar");

document.getElementById("showNav").onclick=function(){
    if(nav.style.height=="262px"){
        nav.style.height="0";
    }
    else{
        nav.style.height="262px";
    }
}