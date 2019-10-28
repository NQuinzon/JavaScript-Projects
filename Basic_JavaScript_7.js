var X = 10;
function add_numbers_1() {
    document.write(20 + X + "<br>");
}
function add_numbers_2() {
    document.write(X + 100);
}
add_numbers_1();
add_numbers_2();

function add_numbers_3() {
    var X = 10;
    console.log(15 + X);
}
function add_numbers_4() {
    console.log(X + 100);
}
add_numbers_3();
add_numbers_4();

function get_date() {
    if (new Date().getHours()<18) {
        document.getElementById("Greeting").innerHTML="How are you today?";
    }
}

function Age_Function() {
    Age=document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time<12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time <18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}