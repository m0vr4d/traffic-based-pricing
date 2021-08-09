const pv={0:10,1:50,2:100,3:500,4:1000};
const pm={0:8,1:12,2:16,3:24,4:36};
let views=100,bill=16,year=false;

calc = function(){
    let ttl=bill-(year*(bill/4))
    document.getElementById("nopv").innerHTML=views+"K";
    document.getElementById("mp").innerHTML="$"+ttl;
    
}

find = function(){
    let prog=document.getElementById("slide").value;
    views=pv[prog];
    bill=pm[prog];
    calc();
}
monthly = function(){
    year=false;
    document.getElementById("mvy").checked=0;
    calc();
}
yearly = function(){
    year=true;
    document.getElementById("mvy").checked=1;
    calc();
}
reverse = function(){
    if(year)
        monthly();
    else
        yearly();
}
