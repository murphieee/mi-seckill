var tabs = document.getElementById('tabs').getElementsByTagName('li');
var goodList = document.getElementById('goodList').getElementsByTagName('ul');
var oNav = document.getElementById('tabs');
for(var i=0; i< tabs.length; i++){
    tabs[i].onclick = setActive;
}
function setActive(){
    for(var i = 0; i< tabs.length; i++){
        if(tabs[i] === this){
            tabs[i].className = "active";
            goodList[i].className = "clearfix active";
        }
        else{
            tabs[i].className = "";
            goodList[i].className = "clearfix";
    }
        
        
    }
}
// 也可以用window.onscroll = fixSet;
window.addEventListener("scroll",fixSet);
function fixSet() {
    var scrTop = document.scrollingElement.scrollTop;
    if (scrTop>=263){
        oNav.className = "seckill-nav nav-fix"; 
    }
    else{
        oNav.className = "seckill-nav";
    }
}

