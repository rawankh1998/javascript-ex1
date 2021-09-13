const arr = [1,7,3,0,-5,7,3,9];
for (let i=0; i <arr.length  ;i++ ){
    console.log(arr[i])
}
function arrLength(arr){
    
        let length = 0;
        while(arr[length]!==undefined){
          length++;
        }
        return length;
      }
      console.log(arrLength(arr));   


 
function arraySum(arr) {
   let sum= 0;
 for (let i = 0; i < arr.length; i++) {
    sum= sum+arr[i];
}
    return sum;
   
}
console.log(arraySum(arr));

function arrayMulti(arr) {
    let sum=1;
    for (let i=0; i<arr.length; i++) {
        sum = sum * arr[i];
    } 
    return sum;
}

console.log(arrayMulti(arr));

   