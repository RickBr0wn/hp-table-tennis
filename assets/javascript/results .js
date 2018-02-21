// http://myjson.com

$(document).ready(function(){
    $.getJSON("https://api.myjson.com/bins/mnq9l", function(result){
        let arr = result.original.player;
        console.log(arr);

        let matchA = createMatch(arr, 1);

        document.getElementById('matchA').innerHTML = matchA;
        document.getElementById('matchB').innerHTML = matchB;
        document.getElementById('matchC').innerHTML = matchC;
        document.getElementById('matchD').innerHTML = matchD;
        document.getElementById('matchE').innerHTML = matchE;
        document.getElementById('tableF').innerHTML = matchF;
        document.getElementById('tableG').innerHTML = matchG;
        document.getElementById('matchH').innerHTML = matchH;
    });
});

function createMatch(arr, group){
    console.log(arr);
    let grp = group-1;
    let data = "<table><tr><td>";
    data += arr[0+grp] + " vs " + arr[1+group];
    data += "</td></tr></table>";
}