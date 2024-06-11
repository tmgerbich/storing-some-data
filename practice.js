// Create a function that takes an array containing only numbers and returns the first element.
const getFirstValue = (array) => {
    return array[0];
};

result = getFirstValue();
console.log(result);


// Create a function called incrementItems! It is intended to add 1 to every element in the array!
const incrementItems = (array) => {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i] + 1;
    }
};

incrementItems();
console.log(test);

// Write a function rotate that rotates the elements of an array. 
const rotate = (array) => {
    array.push(array[0]);
        array.shift();
};

rotate();