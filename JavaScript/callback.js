// simple example 1:

function findName(names) {
  const myNameIsIncluded = names.find((elem) => { 
    return "Ana" === elem
  });
  if (myNameIsIncluded) {
      return "Found me";
  } else {
      return "Not found me :(";
  }
}
const namesArr = ["David", "Ana", "Alexandra"];
console.log(findName(namesArr));


// simple example 2:

let birthYears = [1964, 2008, 1999, 2005, 1978, 1985, 1919]

function calculateAge(birthYear) {
  return 2021 - birthYear
}

function canDrive(birthYear) {
  const age = calculateAge(birthYear)
  if (age >= 17) {
    console.log(`Born in ${birthYear} can drive`);
  } else {
    console.log(`Born in ${birthYear} can drive in ${ 17 - age} years`);
  }
}

const ages = birthYears.map(calculateAge)

birthYears.forEach(canDrive)