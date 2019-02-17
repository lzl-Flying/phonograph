
var oPin = document.getElementsByClassName('pin')[0];
var oTable = document.getElementsByClassName('turntable')[0];
var oBtn = document.getElementsByTagName('button')[0];
var key = true;
var timer;
var oTab = document.getElementsByClassName('tab')[0];
oBtn.onclick = function () {
    key = !key;
    clearTimeout(timer);
    if(!key) {  //播放
        oPin.className = 'pin btnpin';
        timer = setTimeout(function() {
            oTable.style.animationPlayState = 'running'; 
        },800);
        
    }else{  //暂停
        oPin.className = 'pin';
        oTable.style.animationPlayState = 'paused';
    }
    
}
