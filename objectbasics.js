let obj1 = {}; //creates the object
obj1['name']='John'; //key value pair
obj1['age']=25;

console.log(obj1);
console.log(JSON.stringify(obj1)); //string version of the object

let stringifiedJSON = JSON.stringify(obj1); //string version
let javascriptobject = JSON.parse(stringifiedJSON); //make string to JSON object

console.log(stringifiedJSON);
console.log(javascriptobject);

obj1['print']=function(){console.log('this is printed from the function')}; // create function within a JSON object
obj1.print(); //call the function

//an object is a collection properties and functions
//both properties and functions can be dynamic


//display all the properties within the object
for (let property in obj1){
    console.log(property,obj1[property]);
}

