/**
 * Created by youngrivers on 2016/5/28.
 */
var login=document.getElementById("login");
var loginBox=document.getElementById("login-box");
var closeBox=document.getElementById("close-box");
login.onclick=function(){
    loginBox.style.display="block";
    document.getElementsByClassName("flex-box")[0].style.visibility="visible"
};
closeBox.onclick= function () {
    loginBox.style.display="none";
    document.getElementsByClassName("flex-box")[0].style.visibility="hidden"
};
document.getElementsByClassName("flex-box")[0].onclick=function () {
    loginBox.style.display="none";
    document.getElementsByClassName("flex-box")[0].style.visibility="hidden"
};