/**
 * Created by youngrivers on 2016/4/4.
 */
(function(){
    // 元素对象缓存
    var oText=document.getElementById("oInput");
    var button1=document.getElementById("button1");
    var button2=document.getElementById("button2");
    var button3=document.getElementById("button3");
    var button4=document.getElementById("button4");
    var oNum=document.getElementById("num");
    //判断是否输入的是数字，不是则清空输入
    function checkUp() {
        var store = Number(oText.value);
        if (isNaN(store)) {
            alert("请输入正确的数字");
            oText.value = " ";
            return false;
        } else {
            return true;
        }
    }
    //从左侧输入到UL的页面中
    function pushLeft(){
        var num=oNum.firstChild;
        var newLi=document.createElement("li");
        newLi.innerHTML=oText.value;
        oNum.insertBefore(newLi,num);
    }
    //从右侧输入到UL的页面中
    function pushRight(){
        var newLi=document.createElement("li");
        newLi.innerHTML=oText.value;
        oNum.appendChild(newLi);
    }
    //点击左侧入按钮，获取用户输入，并输出到页面中
    function addLeft(){
        checkUp();
        pushLeft();
    }
    //点击右侧入按钮，获取用户输入，并输出到页面中
    function addRight(){
        checkUp();
        pushRight();
    }
    //点击左侧出按钮，获取数字，并从页面删除
    function deleteLeft(){
        var firstNum=oNum.firstChild;
        alert("确定你要删除的数是："+firstNum.innerHTML);
        oNum.removeChild(firstNum);
    }
    //点击右侧出按钮，获取数字，并从页面删除
    function deleteRight(){
        var lastNum=oNum.lastChild;
        alert("确定你要删除的数是："+lastNum.innerHTML);
        oNum.removeChild(lastNum);
    }
    //定义执行事件的主函数
    function int(){
        //左侧入按钮触发函数“方法”
        button1.onclick=addLeft;
        //右侧入按钮触发函数“方法”
        button2.onclick=addRight;
        //左侧出按钮触发函数“方法”
        button3.onclick=deleteLeft;
        //右侧出按钮触发函数“方法”
        button4.onclick=deleteRight;
    }
    //执行JS事件
    int();

    //点击输入的元素,获取数字，删除数字
    oNum.onmouseover=function (){
        var faceNum=oNum.getElementsByTagName("li");
        for(var i in faceNum){
            faceNum[i].index=i;
            faceNum[i].onclick=function(){
                oNum.removeChild(oNum.childNodes[this.index]);
            }
        }
    };
})();