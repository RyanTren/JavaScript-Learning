addOne([1,2,3]);
addOne([-2,-1,0,99]);


let array = [];

function addOne(array){
    for(let i = 0; i < array.length; i++){
        console.log(array[i] + 1);
    }
}