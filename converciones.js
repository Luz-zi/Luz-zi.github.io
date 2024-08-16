/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

function conversionKelvin(){
  let temp=document.getElementById("txtTemp").value;
  let res =document.getElementById("txtRes").value;
  
  res= (temp*1)+273.15;
  document.getElementById("txtRes").innerHTML=res; 
}

function conversionFa(){
  let temp=document.getElementById("txtTemp").value;
  let res =document.getElementById("txtRes").value;

 res= (temp*9/5) + 32;

  document.getElementById("txtRes").innerHTML=res; 
}

function conversionPulg(){
  let med=document.getElementById("txtMe").value;
  let res =document.getElementById("txtResMed").value;

 res= (med*1)/2.54;

  document.getElementById("txtResMed").innerHTML=res; 
}
 
function conversionPies(){
  let med=document.getElementById("txtMe").value;
  let res =document.getElementById("txtResMed").value;

 res= (med*1)/30.48;

  document.getElementById("txtResMed").innerHTML=res; 
}

function conversionYarda(){
  let med=document.getElementById("txtMe").value;
  let res =document.getElementById("txtResMed").value;

 res= (med*1)/91.44;

  document.getElementById("txtResMed").innerHTML=res; 
}

function conversionMilla(){
  let med=document.getElementById("txtMe").value;
  let res =document.getElementById("txtResMed").value;

 res= (med*1)/160900;

  document.getElementById("txtResMed").innerHTML=res; 
}

function conversionYen(){
  let moneda=document.getElementById("txtMoneda").value;
  let res =document.getElementById("txtResMoneda").value;

 res= moneda*8.82;

  document.getElementById("txtResMoneda").innerHTML=res; 
}

function conversionRupia(){
  let moneda=document.getElementById("txtMoneda").value;
  let res =document.getElementById("txtResMoneda").value;

 res= moneda*4.61;

  document.getElementById("txtResMoneda").innerHTML=res; 
}

function conversionLib(){
  let moneda=document.getElementById("txtMoneda").value;
  let res =document.getElementById("txtResMoneda").value;

 res= moneda*0.044;

  document.getElementById("txtResMoneda").innerHTML=res; 
}

function conversionPesoChi(){
  let moneda=document.getElementById("txtMoneda").value;
  let res =document.getElementById("txtResMoneda").value;

 res= moneda*51.35;

  document.getElementById("txtResMoneda").innerHTML=res; 
}

function conversionZloty(){
  let moneda=document.getElementById("txtMoneda").value;
  let res =document.getElementById("txtResMoneda").value;

 res= moneda*0.22;

  document.getElementById("txtResMoneda").innerHTML=res; 
}

