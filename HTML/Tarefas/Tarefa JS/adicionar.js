function adicionar(){
    

    let text = document.getElementById("text").value;
    let list = document.getElementById("list").innerHTML

    list += "<li>" + text + "</li>"

    document.getElementById("list").innerHTML = list;
    document.getElementById("text").value = null;
}




