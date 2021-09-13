
const arry=["boo", "doooo", "hoo","ro"]
function arrayString(arry) {
    
    let arr=[];
    for (let i=0; i<arry.length; i++){
        arr.push(arry[i].length)
    }
    return arr;
}
console.log(arrayString(arry))
