/**
 * Created by youngrivers on 2016/3/31.
 */
/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
var cityInput=document.getElementById("aqi-city-input");
var numInput=document.getElementById("aqi-value-input");
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var city=cityInput.value.trim();
    var num=numInput.value.trim();
    if(!city.match(/^[A-Za-z\u4E00-\u9FA5]+$/)){
        alert("城市名必须为中英文字符！");
        return;
    }
    if(!num.match(/^\d+$/)) {
        alert("空气质量指数必须为整数！");
        return;
    }
    aqiData[city]=num;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var str = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
    for(var k in aqiData){
        str += "<tr><td>"+k+"</td><td>"+aqiData[k]+"</td><td><button>删除</button></td></tr>"
    }
    document.getElementById("aqi-table").innerHTML = str;
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
    // do sth.
    var k= this.parentNode.parentNode.firstChild.innerHTML;
    delete aqiData[k];
    renderAqiList();
}

function init() {

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    document.getElementById("add-btn").onclick=addBtnHandle;
    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
    document.getElementById("aqi-table").onclick = function(e){
        var e = e || window.event;
        var target = e.target || e.srcElement;
        target.nodeName.toLowerCase() === "button" &&  delBtnHandle.apply(target);
    }
}

init();
