function Call_Loop() {
    var Digit="";
    var X = 1;
    while (X<20) {
        Digit += "<br>" + X;
        X++
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function stringLength() {
    var str = "Hello World!";
    var n = str.length;
    document.getElementById("stringLength").innerHTML = n;
  }

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
    var Dog_Picture = [];
    Dog_Picture[0] = "sleeping";
    Dog_Picture[1] = "playing";
    Dog_Picture[2] = "eating";
    Dog_Picture[3] = "barking";
    document.getElementById("Array").innerHTML = "In this picture, the dog is " + Dog_Picture[0] + ".";
}

function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Gibson", color:"Black"};
    Musical_Instrument.color="blue";
    Musical_Instrument.price="$900";
    document.getElementById("Constant").innerHTML="The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}

var X = 28;
document.write(X);
{
    let X = 82;
    document.write("<br>" + X);
}
document.write("<br>" + X);

function myFunction() {
    return Math.PI;
}
document.getElementById("return").innerHTML = myFunction();

let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

var text = "";
var i;
for (i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}
document.getElementById("break").innerHTML = text;

var text = "";
var i;
for (i = 0; i < 10; i++) {
  if (i === 3) { continue; } // the continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop
  text += "The number is " + i + "<br>";
}
document.getElementById("continue").innerHTML = text;