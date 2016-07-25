/**
 * Created by youngrivers on 2016/4/23.
 */
window.onload=function(){
  var inS=document.getElementById("inS");
  var onS=document.getElementById("onS");

    var form=document.getElementsByTagName("form")[0];
    var school=document.getElementById("school");
    var company=document.getElementById("company");
    form.onclick=function(){
        if(inS.checked="checked"){
            school.style.display="block";
            company.style.display="none";
        }
        else if(onS.checked="checked"){
            company.style.display="block";
            school.style.display="none";
        }
    };
};