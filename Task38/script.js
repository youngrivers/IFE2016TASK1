/**
 * Created by youngrivers on 2016/8/22.
 */
(function () {
    /*用‘构造函数方式’创建对象*/
    function students(oName,oChinese,oMath,oEnglish) {
        this.name=oName;
        this.chinese=oChinese;
        this.math=oMath;
        this.english=oEnglish;
        this.total=function () {
            return this.chinese+this.math+this.english;
        }
    }
    var students1=new students("小明",80,90,70);
    var students2=new students("小红",90,60,90);
    var students3=new students("小亮",60,100,70);
    //储存人物对象
    var datas=[
        ["小明",80,90,70],
        ["小红",90,60,90],
        ["小亮",60,100,70],
        ["小江",100,70,80]
    ];

    var oBox=document.getElementById("box");
    /*添加标题*/
    var names=["姓名","语文","数学","英语","总分"];
    var oTr=document.createElement("tr");
    for(var i=0;i<names.length;i++){
        var oTd=document.createElement("td");
        oTd.innerHTML=names[i];
        oTr.appendChild(oTd);
    }
    oBox.appendChild(oTr);
    /*添加内容*/
    for(var i=0;i<datas.length;i++){
        var xTr=document.createElement("tr");
        for(var j=0;j<datas[0].length;j++){
            var xTd=document.createElement("td");
            xTd.innerHTML=datas[i][j];
            xTr.appendChild(xTd);
        }
        //添加总成绩
        var aTd=document.createElement("td");
        aTd.innerHTML=datas[i][1]+datas[i][2]+datas[i][3];
        xTr.appendChild(aTd);

        oBox.appendChild(xTr);
    }
    //oTd.innerHTML=names[2];
/*    //排序
    var max=function (a, b) {
      return b-a;
    };
    max(grade_xiaoming,grade_xiaohong);*/



    console.log(datas[1][2]);
})();