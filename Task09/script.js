/**
 * Created by youngrivers on 2016/4/4.
 */
window.onload=function(){
    var box=document.getElementById("box");
    var oUl=box.getElementsByTagName("ul")[0];
    var oLi=oUl.getElementsByTagName("li");
    var oDiv=box.getElementsByTagName("div");

    for(var i=0;i<oLi.length;i++){
        oLi[i].index=i;
        oLi[i].onmouseover=function(){
            for(var j=0;j<oLi.length;j++){
                oLi[j].className="";
                oDiv[j].className="hide";
            }
            this.className="on";
            oDiv[this.index].className="";
        }
    }
};