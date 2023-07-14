var a=Math.floor(Math.random()*100)+1;
var count=0;

function guessNumber(){
    var val=document.getElementById("guessfield").value;
    if(val==a){
       document.getElementById("result").textContent="Congratulations!!!,You got the number in "+(count+1)+"tries";
    }
    else if(val<a){
        count++;
        document.getElementById("result").textContent=count+"Try with a greater number";
    }
    else if(val>a){
        count++;
        document.getElementById("result").textContent=count+"Try with a smaller number";
    }
}