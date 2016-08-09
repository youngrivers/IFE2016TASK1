/**
 * Created by youngrivers on 2016/8/9.
 */
(function () {
    var oImg=document.getElementsByTagName("img");
    var oWin=document.getElementById("win");
    var oBox=document.getElementById("box").getElementsByTagName("img")[0];
    var index;
    oImg[index].onclick=function () {
        //document.body.style.backgroundColor="blue"
        console.log(i);
        oWin.style.display = "block";
        oWin.style.backgroundColor = "black";
        var x = i - oImg.length + 1;
        oBox.src = "img/bg" + x + ".jpg"
    }
})();