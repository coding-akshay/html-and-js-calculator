alert("welcome to calculator")
let a=prompt("enter the fisrt input number")
let b=prompt("enter the seond input number")
let y=prompt("enter the calculations")


function add(){
 let sum=a+b
  alert(sum)
}
function sub (){
 let sum=a-b
 alert(sum)
}
function div(){
  let sum=a/b
  alert(sum)
}
function mul(){
  let sum=a*b
alert(sum)
}
function mod(){
  let sum=a%b
  alert(sum)
}

function print(){
 if(y==="add"){

   add()
 }
 else if(y==="sub"){
  sub()
 }
 else if (y==="div"){
  div()
 }
 else if(y==="mul"){
  mul()
 }
 else if(y==="mod"){
  mod()
 }
 else("not working")

 
}
function calculator(){
  print(a,b,y)
}
calculator()