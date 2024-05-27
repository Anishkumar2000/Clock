
var a = 0;
var b = 0;
var c = 0;

// var e = 0;
document.querySelector(".start").addEventListener("click", one);
document.querySelector(".start").addEventListener("click", two);
document.querySelector(".stop").addEventListener("click", stop);
document.querySelector(".reset").addEventListener("click", reset);


function one() {
   document.querySelector(".start").disabled = true;
   document.querySelector(".stop").disabled = false;
   document.querySelector(".reset").disabled = true;
   // document.querySelector("#t").removeAttribute("class");
   d = setInterval(sec, 1000);
   


   // document.querySelector(".abc").classList.remove("abc");
   // document.querySelector("#t").classList.add("bc");
   // document.querySelector(".bc").addEventListener("click", check);
}
function two() {
   e = setInterval(min, 60000);
}

function sec() {

   a++
   if (a < 10) {
      document.querySelector(".sec").innerHTML = "0" + a;
      console.log(a);

   }
   else if (a <= 59) {
      document.querySelector(".sec").innerHTML = a;
      console.log(a);
      
   }
   else {
      
      document.querySelector(".sec").innerHTML = "00";
      a=0;
      console.log("00");
   }
  


}
function min() {

   b++
   if (b < 10) {
      document.querySelector(".min").innerHTML = "0" + b;
      console.log(b);

   }
   else if (b <= 59) {
      document.querySelector(".min").innerHTML = b;
      console.log(b);
      
   }
   else {
      
      document.querySelector(".min").innerHTML = "00";
      b=0;
      console.log("00");
   }

  


}
function stop() {
   document.querySelector(".start").disabled = false;
   document.querySelector(".stop").disabled = true;
   document.querySelector(".reset").disabled = false;
   document.querySelector(".start").innerHTML = "Continue";
   clearInterval(d);
   clearInterval(e);
}
function reset() {
   document.querySelector(".start").disabled = false;
   document.querySelector(".stop").disabled = true;
   document.querySelector(".reset").disabled = true;
   document.querySelector(".start").innerHTML = "Start";
   a = 0;
   b=0;
   clearInterval(d);
   clearInterval(e);
   document.querySelector(".sec").innerHTML = "00";
   document.querySelector(".min").innerHTML = "00";

}







