menu_list_array = ["Veg Margherita Pizza","Pepperoni Pizza","Cheese Pizza","Tandoori Pizza","Panner Tikka Pizza","Deluxe Veg Pizza"];

function getmenu(){
var htmldata;
htmldata="<ol class='menulist'>"
menu_list_array.sort();
for(var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+'<li>'+menu_list_array[i]+'</li>'
}
html=htmldata+"</ol>"
document.getElementById("display_menu").innerHTML=htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.push(item);
menu_list_array.sort(item);
}

function add_top(){
   
}