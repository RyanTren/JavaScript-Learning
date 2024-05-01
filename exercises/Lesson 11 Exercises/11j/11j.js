addArrays([1,1,2],[1,1,3]);
addArrays([1,2,3],[4,5,6]);

function addArrays(array1, array2){
    for(let i = 0; i < array1.length; i++){
        console.log(array1[i] + array2[i]);
    }
}