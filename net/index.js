

document.getElementById("cal").onclick=function(){
    num1=new Number(document.getElementById("num1").value)
    num2=new Number(document.getElementById("num2").value)
    op=document.getElementById("op").value
    switch(op){
        case "+":
            document.getElementById("output").textContent=num1+num2;break;
        case "-":
            document.getElementById("output").textContent=num1-num2;break;
        case "*":
            document.getElementById("output").textContent=num1*num2;break;
        case "/":
            document.getElementById("output").textContent=num1/num2;break;
        case "^":
            document.getElementById("output").textContent=Math.pow(num1,num2);break;
        default:
            document.getElementById("output").textContent="Error"
            
    }
    
}

document.getElementById("re").onclick=function(){
    document.getElementById("num1").value=""
    document.getElementById("num2").value=""
    document.getElementById("op").value=""
    
}