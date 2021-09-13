function percentageOfWorld1(population,country){

    let percentage= ((population/7900)*100)
    return `${country} has ${population} million people, so its about ${percentage}% of the world population.`
}
console.log(percentageOfWorld1(1441,'china'));
console.log(percentageOfWorld1(9.053,'Isreal'));
console.log(percentageOfWorld1(144.4,'russia'));


const percenttag= function percentageOfWorld2(population,country){
    let percentage= ((population/7900)*100)
    return `${country} has ${population} million people, so its about ${percentage}% of the world population.`
}
console.log(percenttag(1441,'china'));
console.log(percenttag(9.053,'Isreal'));
console.log(percenttag(144.4,'russia'));