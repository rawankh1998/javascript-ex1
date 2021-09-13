function sevenDigit(n){
    
    for(let i=1; i<=n ;i++){
    
    if ((i%7===0) && ((i+'').indexOf('7') > -1)){
        console.log('boom-boom')
        } else if(i%7===0){
            console.log('boom')

        }else{
          console.log (i)
        } 
   
    
}}
 sevenDigit(18) 
     