function Automobile( year, make, model, type ){
    this.year = year; //integer (ex. 2001, 1995)
    this.make = make; //string (ex. Honda, Ford)
    this.model = model; //string (ex. Accord, Focus)
    this.type = type; //string (ex. Pickup, SUV)
    this.logMe = function(print){
    	if (print){
      	console.log(this.year + " " + this.make + " " + this.model + " " + this.type);
      }
			else {
      	console.log(this.year + " " + this.make + " " + this.model);
      }
    }
}

var automobiles = [ 
    new Automobile(1995, "Honda", "Accord", "Sedan"),
    new Automobile(1990, "Ford", "F-150", "Pickup"),
    new Automobile(2000, "GMC", "Tahoe", "SUV"),
    new Automobile(2010, "Toyota", "Tacoma", "Pickup"),
    new Automobile(2005, "Lotus", "Elise", "Roadster"),
    new Automobile(2008, "Subaru", "Outback", "Wagon")
    ];

/*largest->smallest using bubble sort*/
function sortArr( comparator, array ){
		for (var i = 0 ; i< array.length-1; i++){
     for(var j = 0; j <array.length-i-1; j++){
     //if the second car is newer, earlier in alphabet or type is greater then swap
       if(!comparator(array[j],array[j+1])) {
        var temp = array[j]; 
        array[j] = array[j+1]; 
        array[j+1] = temp;
      }
     }
   }
    return array;
}

/*A comparator takes two arguments and uses some algorithm to compare them. If the first argument is larger or greater than the 2nd it returns true, otherwise it returns false. Here is an example that works on integers*/
function exComparator( int1, int2){
    if (int1 > int2){
        return true;
    } else {
        return false;
    }
}

/*For all comparators if cars are 'tied' according to the comparison rules then the order of those 'tied' cars is not specified and either can come first*/

/*This compares two automobiles based on their year. Newer cars are "greater" than older cars.*/
function yearComparator( auto1, auto2){
    if (auto1.year > auto2.year){
    	return true;
    }
    else {
    	return false;
    }
  
}

/*This compares two automobiles based on their make. It should be case insensitive and makes which are alphabetically earlier in the alphabet are "greater" than ones that come later.*/
//Honda should come before Toyota/toyota, Ford before Honda/honda
function makeComparator( auto1, auto2){
    var model1 = auto1.make.toLowerCase();
    var model2 = auto2.make.toLowerCase();
    
    if (model1 < model2){
    	return true;
    }
    else{
    	return false;
    }
}

/*This compares two automobiles based on their type. The ordering from "greatest" to "least" is as follows: roadster, pickup, suv, wagon, (types not otherwise listed). It should be case insensitive. If two cars are of equal type then the newest one by model year should be considered "greater".*/
function typeComparator( auto1, auto2){
    var typeObj = {'roadster' : 4, 'pickup' : 3, 'suv' : 2, 'wagon' : 1}
 
   var model1 = typeObj[auto1.type.toLowerCase()];
   var model2 = typeObj[auto2.type.toLowerCase()];
    
  if(typeof(model1) == 'undefined'){ model1 = 0; }
  if(typeof(model2) == 'undefined'){ model2 = 0; }
    
    //use year to break the tie
    if (model1 == model2){
    	return yearComparator(auto1, auto2);
    }
    else if (model1 > model2){
    	return true;
    }
    else {
    	return false;
    }
}

//for every car in the array, print (only printing type when print=true)
function printAutos(autosArray, print){
	for (car in autosArray){
  	autosArray[car].logMe(print);
  }

}


//do not print the types for these
var print = false;

console.log("*****");
console.log("The cars sorted by year are:");
sortArr(yearComparator, automobiles);
printAutos(automobiles, print);

console.log("\nThe cars sorted by make are:");
sortArr(makeComparator, automobiles);
printAutos(automobiles, print);

//when sorted by type, print the type
print = true;

console.log("\nThe cars sorted by type are:");
sortArr(typeComparator, automobiles);
printAutos(automobiles, print);
console.log("*****");