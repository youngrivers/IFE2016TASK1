/**
 * Created by youngrivers on 2016/4/19.
 */
var btn=document.getElementById("btn");
var text=document.getElementById("text");
var text1=document.getElementById("text1");
var text2=document.getElementById("text2");
var inp=document.getElementById("inp");
btn.onclick=function(){
    var oLi=text.value.trim().split(/[,，;；、。.\s\n]+/);//去空格，分割采用正则表达式
    for(var i=0;i<oLi.length;i++){
        var oDiv=document.createElement("div");
        oDiv.innerHTML=oLi[i];
        text2.insertBefore(oDiv,text2.firstChild);
    }
    if(text2.getElementsByTagName("div").length>10){
        text2.replaceChild(text2.lastChild,text2.firstChild);//最后一项代替第一项
    }
    text.value="";//清空列表框
};
inp.onkeyup=function(){
    var oText=inp.value.trim().split(/[,，;；、。.\s\n]+/);
    for(var i=0;i<oText.length;i++){
        var oDiv=document.createElement("div");
        oDiv.innerHTML=oText[i];
        text1.insertBefore(oDiv,text1.firstChild);
    }
};
text1.onmouseover=function(){
    var box=text1.getElementsByTagName("div");
    var temp=[];
    for(var i=0;i<box.length;i++){
        temp.push(box[i].innerHTML);
        box[i].index=i;
        box[i].onclick=function(){
            text1.removeChild(text1.childNodes[this.index]);
        };
        box[i].onmouseover=function(){
            text1.childNodes[this.index].innerHTML="删除"+temp[this.index]+"?";
        };
    }
    if(text1.getElementsByTagName("div").length>10){
        text1.replaceChild(text1.lastChild,text1.firstChild);//最后一项代替第一项
    }
    inp.value="";
};
text1.onmouseout=function(){
    var box=text1.getElementsByTagName("div");
    var temp=[];
    for(var i=0;i<box.length;i++){
        temp.push(box[i].innerHTML);
        box[i].index=i;
        box[i].onmouseout=function(){
            text1.childNodes[this.index].innerHTML=temp[this.index];
        };
    }
};