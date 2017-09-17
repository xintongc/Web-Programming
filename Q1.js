/**
 * Created by jack on 2017/3/18.
 */
var searchStr;
var ch;
var outResult;
function getAllDomELlement(){
    document.getElementById("searchButton").addEventListener("click",searchOccurrences,false);
}
function searchOccurrences(){
    var count = 0,chValue, searchSt, result;
    searchStr=document.getElementById("searchString").value;
    ch=document.getElementById("characters").value;
    outResult=document.getElementById("output").value;
    charValue=ch;
    searchSt=searchStr;
    for(i=0;i<searchSt.length;i++){
        if (searchSt.toLowerCase().indexOf(charValue.toLowerCase())!=-1) {
            searchSt=searchSt.substring(searchSt.toLowerCase().indexOf(charValue.toLowerCase())+1);
            count++;
        }
    }
    result = count;
    if(result==0){
        document.getElementById("output").innerHTML="The chatacter '"+ch+"' not found.";
    }
    else {
        document.getElementById("output").innerHTML=result+" occurrence(s) of '"+ch+"' found";
    }
}

window.addEventListener("load",getAllDomELlement ,false);