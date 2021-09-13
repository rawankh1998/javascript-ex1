let jumps= [5,5,8,7,-1,5,4,8,9]
function ToKick(arr,WhoToKick){
   let temp=[];
   for (let name=0; name< arr.length; name ++){
       if (arr[name]!==WhoToKick) temp.push(arr[name]);
   }
   return temp;
}
   function sumJumps(array){
       let sum=0;
       for (let i=0; i<array.length ; i++){
           if (array[i]<=0)
           array=ToKick(array,array[i])
           sum=sum+array[i]
       }
       return sum/array.length
   } 
   function avgJumper(arr){
       let tempArr=[]
       for(let j=0; j<(arr.length/3);j++){
           tempArr.push(sumJumps(arr.slice(3*j,3*(j+1))))
       }return tempArr

   }
   console.log(avgJumper(jumps))

   //3
   function bestAvgJump(arr){
       for (let n=0;n<arr.length;n++){
           return Math.max(arr[n])
   }} 
   function bestJump(array){
    for (let n=0;n<array.length;n++){
        return Math.max(array[n])
    }
   }
    
  
