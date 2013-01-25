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
 console.log("Each cruiser is driving at " + spaceTravel.speed() + " lightyears.");
 
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

// Number Function
var launchAttack = function(enemy) {

    while (enemy > 0) {
        
        console.log("Nakhuta Space Fleet started attacking " + enemy + " Star Destroyers then...");
        enemy = enemy - 1;
        
    }
    star = "Until all the Star Destroyers were eliminated.";
    return star;
}
var successFleet = launchAttack(3);
console.log(successFleet);

// Array Function
var newAttack = function() {
    var planetNames = ["Planet G", "Nabu", "Floward", "Sarcarious"],
	lightyearPerPlanet = [3, 6, 1, 4],
	presNames = ["Lt. Otto", "Corporal Cheeback"];
            var watchPlanet = function(whatPlanet) {
            var planetName = planetNames[whatPlanet],
                distanceThisPlanet = lightyearPerPlanet[planetNumber];
                console.log(presNames[0] + " and " + presNames [1] + " wanted to explore " + planetName + " at " + distanceThisPlanet + " lightyears.");
                for (var distances = 0; distances < distanceThisPlanet; distances += 3) {
                    var distanceRemain = distanceThisPlanet - distances;
                    console.log("We are " + distanceRemain + " lightyears left. " + distances + " lightyears we have traveled.");
            }
            console.log("We finished exploring " + planetName + ".");
        };
        for (var planetNumber = 0; planetNumber < planetNames.length; planetNumber++) {
            watchPlanet(planetNumber);        
    };   
};
newAttack();