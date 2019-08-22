function My_First_Function () {
    var String = "This text is green!";
    String += " \"This text is also green!\"";
    var result = String.fontcolor("green");
    document.getElementById("Green_Text").innerHTML = result;
}