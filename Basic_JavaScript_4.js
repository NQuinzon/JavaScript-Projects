function my_Dictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Black and White",
        Breed:"Lhasa Apso",
        Age:"3",
        Sound:"Bark!"
    };
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}