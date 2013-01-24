//alert("JavaScript works!");

// William Rivera
// SDI 1301
// Project 3
// Third Story on JavaScript

// JSON Data
var json = {
    "commanders": [
        {
            "name": "Ethan M. Rivers",
            "age": 30,
            "cruiser": "Blackskull",
            "access": true
        },
        {
            "name": "Gian Hunts",
            "age": 26,
            "cruiser": "Uziel",
            "access": true
        },
        {
            "name": "Dylan Cages",
            "age": 22,
           "cruiser": "Bloodhawk",
           "access": false
        }
    ]
        
};

var handleData = function (json) {
    for (var i = 0; i < json.commanders.length; i++){
        var commander = json.commanders[i];
        console.log("This is " + commander.name + " and is " + commander.age + " years old.");
        console.log("He submit a " + commander.access + " incident reports on his cruiseship " + commander.cruiser + ".");
    };
};
handleData(json);