let people = ["Greg", "Mary", "Devon", "James"];
people.forEach((name)=>{
    console.log(name)
})
function kickGreg(arr,whoToKick) {
      let temp = [];
     for (let i = 0; i < arr.length; i++) {
     if (arr[i] !== whoToKick) {
     temp.push(arr[i])
     }
    }
    return temp;
    }
    
    console.log(kickGreg(people,"Greg"));

    function kickJames(arr,whoToKick) {
        let temp = [];
       for (let i = 0; i < arr.length; i++) {
       if (arr[i] !== whoToKick) {
       temp.push(arr[i])
       }
      }
      return temp;
      }
      
      console.log(kickJames(people,"James"));

let newPeople = [];
newPeople.push('Matt');
 people.forEach((name) => {
 newPeople.push(name);
});

 

people.push('rawan');
console.log(people)

 for(let i=0 ; i < people.length ; i++){
if(people[i] !=='Mary'){
console.log(people[i])
}
}
console.log('Mary')

;
console.log(newPeople.slice(1));

console.log(people.indexOf("Mary"));
console.log(people.indexOf("Foo"));




people.splice(2,1,"Elizabeth", "Artie");
console.log(people)


let withBob = people.concat("Bob");

console.log(withBob)