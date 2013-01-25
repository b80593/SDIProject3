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
        console.log("This is " + commander.name + " and he was " + commander.age + " years old.");
        console.log("He submited a " + commander.access + " incident reports on his cruiseship " + commander.cruiser + ".");
    };
};
handleData(json);

// My Global Variable
var spaceStry = "That was the reputation of our commanders of the Nakhuta Space Fleet. Everyone talk about, how young was Commander Dylan, but noone knew the situation of life that made him a commander in the first place.";
    yearStry = 2157;
    
    console.log(spaceStry);
    console.log("The year was " + yearStry + " long after the destruction of planet Earth.");

// Method Procedure
var spaceTravel = {
    "fleet": "Nakhuta Space Fleet",
    "distance": 250,
    "time": 2,
    "speed": function() {
        var totalSpeed = this.distance / this.time;
        return totalSpeed;
    }
   
};
 console.log("Each cruiser is driving at " + spaceTravel.speed());
 
// Boolean Function
var getSendReport = function (admiral) {
    var reportForm = (new Date()).getHours(),
        report, sosreport;
    
    if (reportForm < 12 ) { sosreport = "Satisfactory"; }
    else if (reportForm < 20) { sosreport = "not Satisfactory"; }
    else {sosreport = "Excelent"; }
    report = "The General received a " + sosreport + " report from the " + admiral + " of the Nakhuta Space fleet.";
    return report;
};
var admReport = getSendReport("Admiral Will Stryker");
console.log(admReport);

// String Function
var stelarFleet = function(backHome) {
    var destEnemy = saliva,
    saliva = "After the report a cruiser from another system threat our planet " + backHome + " with an Intergalactic war.";
    return saliva;
}

var attackTurn = stelarFleet("Nakhuta");
console.log(attackTurn);
