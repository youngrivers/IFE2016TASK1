/**
 * Created by youngrivers on 2016/4/19.
 */
var oText=document.getElementById("text");
var button1=document.getElementById("button1");
var button2=document.getElementById("button2");
var button3=document.getElementById("button3");
var button4=document.getElementById("button4");
var button5=document.getElementById("button5");
var oNum=document.getElementById("num");
//左侧入
button1.onclick=function(){
    for(var i=0;i<oText.value.split(/[,，;；、。.\s\n]+/).length;i++){
        var newLi=document.createElement("li");
        newLi.innerHTML=oText.value.split(/[,，;；、。.\s\n]+/)[i];
        oNum.insertBefore(newLi,oNum.firstChild);
    }
};
//右侧入
button2.onclick=function(){
    for(var i=0;i<oText.value.split(/[,，;；、。.\s\n]+/).length;i++){
        var newLi=document.createElement("li");
        newLi.innerHTML=oText.value.split(/[,，;；、。.\s\n]+/)[i];
        oNum.appendChild(newLi);
    }
};
//左侧出
button3.onclick=function(){
    oNum.removeChild(oNum.firstChild);
};
//右侧出
button4.onclick= function(){
    oNum.removeChild(oNum.lastChild);
};
//查询
button5.onclick=function(){
    var key=document.getElementById("oInput").value;
    var sumLi=oNum.getElementsByTagName("li");
    var color=[];//收集模糊出现结果的角标
    for(var i=0;i<sumLi.length;i++){
        if(isMatch(key,sumLi[i].innerHTML)){
            color.push(i);//添加新元素到数组中
        }
    }
    for(var j=0;j<color.length;j++){
        var x=color[j];//取出角标
        sumLi[x].style.color="blue";
    }
    document.getElementById("oInput").innerHTML="";//查询后清空查询
};
//字符模糊  匹配
function isMatch(key,x){
    var reg=new RegExp(key);
    if(x.match(reg)) return true;
}