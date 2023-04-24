var leads=[];
var localLeads=JSON.parse(localStorage.getItem("MyLeads")); 
const inputel=document.getElementById("input-el");
const inputbtn=document.getElementById("input-btn");
const clearbtn=document.getElementById("clear-btn");
const ul=document.getElementById("ul-el");

if(localLeads){ 
        leads=localLeads 
        renderleads();
    }

inputbtn.addEventListener("click",function(){   
    renderleads();
    inputel.value="";
    localStorage.setItem("MyLeads",JSON.stringify(leads))
    inputel.focus();
})
clearbtn.addEventListener("click",function(){
    localStorage.clear
    renderleads();
})
function renderleads(){
    let name="";
    leads.push(inputel.value);
    for(let i=0;i<leads.length;i++){
        name += '<li><a href="' + leads[i] + '" target="_blank">' + leads[i] + '</a></li>';

    }
    ul.innerHTML=name; 
}