/**
 * Created by youngrivers on 2016/4/22.
 */
(function(){
    var small1=document.getElementById("small1");
    var small2=document.getElementById("small2");
    var small3=document.getElementById("small3");
    var small4=document.getElementById("small4");
    var small5=document.getElementById("small5");
    var inp1=document.getElementById("inp1");
    var inp2=document.getElementById("inp2");
    var inp3=document.getElementById("inp3");
    var inp4=document.getElementById("inp4");
    var inp5=document.getElementById("inp5");
    var btn=document.getElementById("btn");
    inp1.onfocus=function(){
        small1.innerHTML="必填，长度为4~16个字符";
    };
    inp1.onblur=function(){
        //判断是否为空
        if(inp1.value==""){
            small1.innerHTML="姓名不能为空";
            small1.style.color="red";
            inp1.style.borderColor="red";
        }
        //判断字符数为4~16位，中文长度为2
        else{
            if(change(inp1.value.trim())<4||change(inp1.value.trim())>16){
                small1.innerHTML="	请输入长度为4~16位字符";
                small1.style.color="red";
                inp1.style.borderColor="red";
            }
            else{
                small1.innerHTML="	格式正确";
                small1.style.color="#60ba47";
                inp1.style.borderColor="#60ba47";
            }
        }
    };
    inp2.onfocus=function(){
        small2.innerHTML="请输入8~16位字符";
    };
    inp2.onblur=function(){
      if(inp2.value==""){
          small2.innerHTML="密码不能为空";
          small2.style.color="red";
          inp2.style.borderColor="red";

      }
      else{
          if(change(inp2.value.trim())<8||change(inp2.value.trim())>16){
              small2.innerHTML="请输入8~16位字符";
              small2.style.color="red";
              inp2.style.borderColor="red";
          }
          else{
              small2.innerHTML="密码可用";
              small2.style.color="#60ba47";
              inp2.style.borderColor="#60ba47";
          }
      }
    };
    inp3.onfocus=function(){
        small3.innerHTML="再次输入相同密码";
    };
    inp3.onblur=function(){
        if(inp3.value==""){
            small3.innerHTML="密码不能为空";
            small3.style.color="red";
            inp3.style.borderColor="red";

        }
        else{
            console.log(inp3.value.trim());
            console.log(inp2.value.trim());
            if(inp3.value.trim()===inp2.value.trim()){
                small3.innerHTML="密码输入一致";
                small3.style.color="#60ba47";
                inp3.style.borderColor="#60ba47";
            }
            else{
                small3.innerHTML="密码输入不一致";
                small3.style.color="red";
                inp3.style.borderColor="red";
            }
        }
    };
    inp4.onfocus=function(){
        small4.innerHTML="请输入正确的邮箱格式";
    };
    inp4.onblur=function(){
        if(inp4.value==""){
            small4.innerHTML="邮箱不能为空";
            small4.style.color="red";
            inp4.style.borderColor="red";
        }
        else if(/^[\w]+@([a-z0-9]+\.)+[a-z0-9]{2,4}$/i.test(inp4.value)){
            small4.innerHTML="邮箱格式正确";
            small4.style.color="#60ba47";
            inp4.style.borderColor="#60ba47";
        }
        else{
            small4.innerHTML="邮箱格式错误";
            small4.style.color="red";
            inp4.style.borderColor="red";
        }
    };
    inp5.onfocus=function(){
        small5.innerHTML="请输入正确的手机号码";
    };
    inp5.onblur=function(){
        if(inp5.value==""){
            small5.innerHTML="手机号码不能为空";
            small5.style.color="red";
            inp5.style.borderColor="red";

        }
        else{
            if(inp5.value.length==11){
                small5.innerHTML="手机号码格式正确";
                small5.style.color="#60ba47";
                inp5.style.borderColor="#60ba47";
            }
            else{
                small5.innerHTML="手机号码格式错误";
                small5.style.color="red";
                inp5.style.borderColor="red";
            }
        }
    };
    btn.onclick=function(){
        console.log(inp1.style.borderColor);
        if(inp1.style.borderColor=="rgb(96, 186, 71)"&&inp2.style.borderColor=="rgb(96, 186, 71)"&&inp3.style.borderColor=="rgb(96, 186, 71)"&&inp4.style.borderColor=="rgb(96, 186, 71)"&&inp5.style.borderColor=="rgb(96, 186, 71)"){
            alert("提交成功")
        }
        else{
            alert("输入有误!");
        }
    };
    //中文字符长度转换
    function change(str){
        var realLength=0;
        for(var i=0;i<str.length;i++){
            charCode=str.charCodeAt(i);
            if(charCode>=0&&charCode<=128){
                realLength+=1;
            }
            else{
                realLength+=2;
            }
        }
        return realLength;
    }
})();
