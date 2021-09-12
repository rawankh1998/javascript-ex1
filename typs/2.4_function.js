
let date = new Date();
const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthName = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

function getDayName() {
    return day[date.getDay()]
}

function getDayOfMonth() {
    return date.getDate()
}
function getMonthName() {
    return monthName[date.getMonth()];
}

getMonthName()

function getYear() {
    return date.getFullYear();
}

function getDateFormat() {
    return `Today is ${getDayName()} the ${getDayOfMonth()} of ${getMonthName()}, ${getYear()}`
}

console.log(getDateFormat())
