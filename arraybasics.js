let a = ['US','UK'];//array literal
a.push('FR');

console.log(a.toString());

a = new Array('UK','US','FR');

console.log(a.toString());

console.log(a.join('*'));

a.pop();//always removes the last element
console.log(a.toString());

a.push('CAN');//adds elements to the end
console.log(a.toString());

a.shift(); //removes the first element
console.log(a.toString());

a.unshift('UK');//adds elements to the start
console.log(a.toString());

console.log(a.length);

let b = ['IND','CHINA','UAE'];

a = a.concat(b);//merges array b to the end off array a
console.log(a.toString());

a.splice(1,0,'AUS');//add element AUS at index 1, array index starts with 0. second digit indicates the number of elements to be deleted
console.log(a.toString());

a.sort();//sorts the elements in ascending order and stores the values within the array
console.log(a.toString());

a.reverse();//sorts the elements in descending order and stores the values within the array
console.log(a.toString());

let num1 = [10, 100, 50, 25, 5]; //sorting numbers in ascending order
num1.sort(function(a,b){return a-b});
console.log(num1);

num1 = [10, 100, 50, 25, 5]; //sorting numbers in descending order
num1.sort(function(a,b){return b-a});
console.log(num1);