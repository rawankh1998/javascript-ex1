const myCountry={
    country: 'Finland',
    capital:  'Helsinki',
    language: 'Finnish',
    population: 6,
    neighbours: ['A','B','C'],
    describe: function (){
        return `${this.country} has ${this.population}  million people, thier mother tongue is ${this.language} ${this.neighbours.length} neighbouring countries and a capiyal called ${this.capital}`  
      },
    checkIsland: function(isIsland){
        
        return (isIsland ? '0' : '3');
    }
}
console.log(myCountry.describe())
console.log(myCountry.checkIsland(true))
console.log(myCountry.checkIsland(false))