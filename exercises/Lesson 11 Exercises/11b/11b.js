getLastValue([1, 20, 22, 24, 5]);
getLastValue(['hi', 'hello', 'good']);

let array = [];

function getLastValue(array){
    for(let i = 0; i < array.length; i++){
        last = array.length - 1;
    }
    console.log(array[last]);
}