/**
 * Created by youngrivers on 2016/8/8.
 */
(function () {
    var choose=document.getElementById("choose");
    var frame=document.getElementsByClassName("frame");
    frame[0].className="frame"+" show";
    //相框智能显示
    choose.onclick=function () {
        var c=choose.value;
        console.log(c);
        for(var i=0;i<frame.length;i++){
            frame[i].className="frame";//重置
            if(i==c-1){
                frame[i].className="frame"+" show";
                console.log(frame[i].className);
            }
        }
    };
})();