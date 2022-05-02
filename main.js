var menu=["Cutlet", "Sandwich", "Pav Bhaji", "French Fries", "Pani Puri","Ice Cream","Cake","Chocolate","Pasta","Noodles"]
function get_menu(){
    var x= document.getElementById("display_menu")
    if(x.style.display=="none"){
        x.style.display="block"
    var data
    data="<ol class='menu'>"
    menu.sort()
    for(var i=0;i<menu.length;i++){
        data=data+"<li>"+menu[i]+"</li>"
    }
    data=data+"</ol>"
    document.getElementById("display_menu").innerHTML=data
        }
    else{
        x.style.display="none"}
}
function add_item(){
    var data
    var item = document.getElementById("add_item").value
    menu.push(item)
    menu.sort()
    data = "<section class='cards'>"
    data = data+"</section>"
    document.getElementById("display_addedmenu").innerHTML=data
}
