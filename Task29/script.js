/**
 * Created by youngrivers on 2016/4/20.
 */
(function(){
    window.onload=function(){
        var inp=document.getElementById("inp");
        var btn=document.getElementById("btn");
        var oLabel=document.getElementById("oLabel");
        var oSmall=document.createElement("small");
        oSmall.innerHTML="必填，长度为4~16个字符";
        oLabel.appendChild(oSmall);
        btn.onclick=function(){
            //判断是否为空
            if(inp.value==""){
                oSmall.innerHTML="姓名不能为空";
                oSmall.style.color="red";
                inp.style.borderColor="red";
            }
            //判断字符数为4~16位，中文长度为2
            else{
                if(change(inp.value.trim())<4||change(inp.value.trim())>16){
                    oSmall.innerHTML="	请输入长度为4~16位字符";
                    oSmall.style.color="red";
                    inp.style.borderColor="red";
                }
                else{
                    oSmall.innerHTML="	格式正确";
                    oSmall.style.color="#60ba47";
                    inp.style.borderColor="#60ba47";
                }
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
    }
})();
