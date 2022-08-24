console.log('Hello From array methods')

/*
ARRAY METHODS
*/

// create an aarray w which we will work

let names = ['Mike', 'Frank', 'Pete'];

// basic looping
for (let i = 0; i < names.length; i++){
    console.log(names[i])
};
console.log('--------------');

//  for ... of
for (let name of names){
    console.log(name);
};
console.log('--------------');


// Array.prototype.forEach()
names.forEach(element => console.log(element));
console.log('--------------');



// callback function - takes in the value, its index, its entire array in that order (fn's name doesnt matter)
function callBack(index, name, arr){
    console.log(index, name, arr) // changed the order here, and still prints name, index, array in order
}

names.forEach(callBack);

console.log('--------------');

// this does not change the original array, just makes them uppercase
names.forEach(name => console.log(name.toUpperCase()))

names.forEach((name, index) => console.log(name , index))



// array.prototype.map()

function mapCallBack(element, index){
    if (index % 2 === 0){
        return element.toUpperCase();
    } else {
        return element.toLowerCase();
    }
}

let newNames = names.map(mapCallBack);
console.log(names);
console.log(newNames);

// as arrow fn / one line
let newerNames = names.map((e, i) => i%2 === 0 ? e.toUpperCase() : e.toLowerCase());

console.log(newerNames)


// array.prorotype.filter()

let cities = ['chicago', 'monterey', 'juneau', 'queenstown', 'austin']

function startsWithC(cityName){
    return cityName[0].toUpperCase() === 'C';
}


let cNameCitiesMap = cities.map(startsWithC);
console.log(cNameCitiesMap);

let cNameCitiesFilter = cities.filter(startsWithC);
console.log(cNameCitiesFilter);


// as an arrow fn
let qNameCities = cities.filter(city => city[0].toUpperCase() === 'Q');
console.log(qNameCities);


let oddCities = cities.filter((c, i) => i%2 === 1);
console.log(oddCities);



// concat method
let arrA = [1,2,3]
let arrB = [4,5,6]
let arrD = [7,8,9]
let arrC = arrA + arrB
console.log(arrC);
console.log(typeof arrC); // this is a string...

// array.prototype.concat(arr1, arr2, etc) - adds instead of joins arrays

let arrAB = arrA.concat(arrB, arrD);
console.log(arrAB)



// array.prototype.includes(element)
let fruits = ['orange', 'apple', 'banana', 'banana']

console.log(fruits.includes('apple'))
console.log(fruits.includes('mango'))
console.log(1 in fruits) // this just returns if there is an index...as 'in' grabs the index if an array


// array.prototype.indexOf(element) - just returns the element of 1st index that matches, -1 otherwise
console.log(fruits.indexOf('banana'))
console.log(fruits.indexOf('watermelon'))



// array.prototype.join(str-character) - 

let myArrName = ['B', 'R', 'I', 'A', 'N']
console.log(myArrName.join('-'))



// array.prototype.push(element) - equivalent to list.append on python

fruits.push('peach', 'kiwi'); // can add multiple elements
console.log(fruits);


// array.prototype.pop() - like python pop() BUT CAN ONLY POP THE LAST ELEMENT

fruits.pop('orange'); // this doesnt work, just removes the last element regardless of input
console.log(fruits)


// array.prototype.slice(start, end) - takes in two args: slice(start, end)
console.log('Array slice:');
console.log(fruits);
console.log(fruits.slice()); // equal to fruits[:] in python, makes a list copy
console.log(fruits.slice(2)); // equal to fruits[2:] in python
console.log(fruits.slice(2, 4)); // equal to fruits[2:4] in python
console.log(fruits.slice(0, -1)); // equal to fruits[2:4] in python


// array.prototype.splice(start, deleteCount, item1, item2, etc) - deletes indicated indexes, and inserts new items in their place
console.log('Array splice:');
console.log(fruits);
fruits.splice(1,3, 'strawberry');
console.log(fruits);


// array.prototype.sort()
let unsorted = [23, 10, 18, -1, 32, 3, 5];
console.log('SORT:');
console.log(unsorted);

unsorted.sort();
console.log(unsorted);


let newUnsorted = [9, 80, 34, -4, 4, 15]

function compareFunc(a, b){
    console.log('A:', a, "B:", b)
    if (a > b){
        return 1
    } else if (a < b){
        return -1
    } else {
        return 0
    }
};

console.log(newUnsorted);
newUnsorted.sort(compareFunc);
console.log(newUnsorted);


// to sort by number value
let anotherUnsorted = [34, 7, 2, 12, 54, 12344, 98]

console.log(anotherUnsorted)
anotherUnsorted.sort((a, b) => a - b)
console.log(anotherUnsorted)