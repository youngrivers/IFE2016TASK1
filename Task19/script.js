/**
 * Created by youngrivers on 2016/4/18.
 */
var oText=document.getElementById("oInput");
var button1=document.getElementById("button1");
var button2=document.getElementById("button2");
var button3=document.getElementById("button3");
var button4=document.getElementById("button4");
var button5=document.getElementById("button5");
var button6=document.getElementById("button6");
var oNum=document.getElementById("num");
var oLi=[];
function checkUp() {
    var store = Number(oText.value);
    if (isNaN(store)) {
        alert("请输入10~100的数字");
        oText.value = " ";
        return false;
    } else {
        return true;
    }
}
window.onload= function(){
    button6.onclick=function(){
        getNum();
    };
    //左侧入按钮触发函数“方法”
    button1.onclick=addLeft;
    //右侧入按钮触发函数“方法”
    button2.onclick=addRight;
    //左侧出按钮触发函数“方法”
    button3.onclick=deleteLeft;
    //右侧出按钮触发函数“方法”
    button4.onclick=deleteRight;
    button5.onclick=rank;//可视化只有用if 和延时函数实现
    if(oNum.length>=60){
        alert("数字超出！")
    }
};
//从左侧输入到UL的页面中
function addLeft(){
    checkUp();
    var num=oNum.firstChild;
    var newLi=document.createElement("li");
    newLi.style.height=oText.value+"px";
    newLi.innerHTML=oText.value;
    oNum.insertBefore(newLi,num);
}
function addRight(){
    checkUp();
    var newLi=document.createElement("li");
    newLi.style.height=oText.value+"px";
    newLi.innerHTML=oText.value;
    oNum.appendChild(newLi);
}
function deleteLeft(){
    var firstNum=oNum.firstChild;
    alert("确定你要删除的数是："+firstNum.innerHTML);
    oNum.removeChild(firstNum);
}
function deleteRight(){
    var lastNum=oNum.lastChild;
    alert("确定你要删除的数是："+lastNum.innerHTML);
    oNum.removeChild(lastNum);
}
//生成随机数
function getNum(){
    oNum.innerHTML="";//重置防止重复出现
    var arr=[];
    for(var i=0;i<50;i++){
        arr[i]=Math.ceil(Math.random()*90)+9;
        oLi[i]=document.createElement("li");
        oLi[i].style.height=arr[i]+"px";
        oLi[i].innerHTML=arr[i];
        oNum.appendChild(oLi[i]);
    }
    return arr;
}
//冒泡排序
function rank(){
    var temp;
    for(var i=0;i<oLi.length-1;i++){
        //var num=oNum.firstChild;
        for(var j=0;j<oLi.length-i-1;j++){
            if(oLi[j].innerHTML>oLi[j+1].innerHTML){
                temp=oLi[j].innerHTML;
                oLi[j].innerHTML=oLi[j+1].innerHTML;
                oLi[j+1].innerHTML=temp;
            }
        }
        //oNum.insertBefore(oLi[j],num);
        //num.innerHTML=temp;
    }
    for(var k=0;k<oLi.length;k++){
        oLi[k].style.height=oLi[k].innerHTML+"px";
    }
    return oLi;//可有可无
}
