addNum([1,2,3],2);
addNum([1,2,3],3);
addNum([-2,-1,0,99],2);


function addNum(array, num){
    for(let i = 0; i < array.length; i++){
        console.log(array[i] + num);
    }
}