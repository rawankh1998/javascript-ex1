function numberscore(score){
    if (score>=0 && score<= 64 ){
        console.log ("F")
    }else if (score>=65 && score<= 69){
        console.log ("D")
    }else if (score>=70 && score<= 79){
        console.log ("C")
    }else if (score>=80 && score<= 89){
        console.log ("B")
    }else {
        console.log("A")
    }
}
numberscore(50);
numberscore(100);
numberscore(78);