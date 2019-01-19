// init elements

let proYears: HTMLSpanElement = <HTMLSpanElement>document.getElementById('proYears');

// declar functions
function calculateYearsFrom(year: number, month: number): number {
    let now = new Date();
    let monthsToSubtract = month + now.getMonth();
    let numberOfMonthsFromGivenDate = (now.getFullYear() - year) * 12; 
    return Math.floor((numberOfMonthsFromGivenDate - monthsToSubtract) / 12);
}

// execute 
proYears.innerText = calculateYearsFrom(2011, 5).toString();