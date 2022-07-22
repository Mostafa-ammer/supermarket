





var minus=document.querySelector('#minus1');
var add=document.querySelector('#add1');
var input=document.querySelector('#inp1');
var update=document.querySelector('#up1');
 var price=document.querySelector("#price1").innerHTML;

minus.onclick=function(){
    if(input.value>=1){
    input.value=input.value-1;
       }
    else{
        alert(" Invaild Amount");
    }
    
}



add.onclick=function(){
   if(input.value<10){
    input.value=parseInt(input.value)+1;
       }
}

update.onclick=function(){
    
    document.getElementById("total1").innerHTML=(parseFloat(price)*parseFloat(input.value))+'$';
    
}




