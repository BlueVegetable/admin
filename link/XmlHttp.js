function getXMLHttp(){
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp=new XMLHttpRequest();
    }
    else {
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xmlhttp;
}
//使用Post异步获取数据
function ajaxPostTrue(url,parameter){
    var xmlHttp=getXMLHttp();
    xmlHttp.onreadystatechange=function() {
        if(xmlHttp.readyState==4 && xmlHttp.status==200) {
            return xmlHttp.responseText;
        } else {
            return "";
        }
    }
    xmlHttp.open("POST",url,true);
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xmlHttp.send(parameter);
}
//使用Post同步获取数据
function ajaxPostFalse(url,parameter){
    var xmlHttp=getXMLHttp();
    xmlHttp.onreadystatechange=function() {
        if(xmlHttp.readyState==4 && xmlHttp.status==200) {
            return xmlHttp.responseText;
        } else {
            return "";
        }
    }
    xmlHttp.open("POST",url,false);
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xmlHttp.send(parameter);
}
function ajaxGetTrue(url,parameters){
    var xmlHttp=getXMLHttp();
    xmlHttp.onreadystatechange=function() {
        if(xmlHttp.readyState==4 && xmlHttp.status==200){
            return xmlHttp.responseText;
        }
        return "";
    }
    xmlHttp.open("GET",url,true);
    //false表示是否要异步
    xmlHttp.send(parameters);
}
function ajaxGetFalse(url,parameters){
    var xmlHttp=getXMLHttp();
    xmlHttp.onreadystatechange=function() {
        if(xmlHttp.readyState==4 && xmlHttp.status==200){
            return xmlHttp.responseText;
        }
        return "";
    }
    xmlHttp.open("GET",url,false);
    //false表示是否要异步
    xmlHttp.send(parameters);
}