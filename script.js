var array = ["Tandoori Chicken Pizza",
"Pepporoni Pizza",
"Veg Supreem Pizza",
"Panner Tika Pizza",
"Deluxe Veggie Pizza"];
var array_value = 0;
function showMenu(){
    for (var i = 0; i < array.length; i++) {
       array_value = array_value + array[i] + "<br>";
       document.getElementById("pizza_menu").innerHTML = array_value;
}
}


function add(){
   var add_input = document.getElementById("text_input1").value;
   array.push(add_input);
   console.log(array);
   console.log(add_input);
}
