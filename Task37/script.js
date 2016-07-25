/**
 * Created by youngrivers on 2016/5/28.
 */
var login=document.getElementById("login");
var c2=document.getElementById("c2");
var loginBox=document.getElementById("login-box");
var closeBox=document.getElementById("close-box");
login.onclick=function(){
    c2.style.backgroundColor="#ccc";
    loginBox.style.display="block";
};
closeBox.onclick= function () {
    c2.style.backgroundColor="#fff";
    loginBox.style.display="none";
};