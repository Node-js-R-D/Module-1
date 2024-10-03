
const arr = [1, 2, 3, 4, 5];

function recursiveIteration(array, index = 0) {
    // Ваш код тут
    if(index < array.length) {
        console.log(arr[index++]);
        recursiveIteration(array, index);
    }
}

recursiveIteration(arr, 0);