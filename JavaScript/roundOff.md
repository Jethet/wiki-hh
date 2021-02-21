**Rounding off numbers in JavaScript**  

The `Number.toFixed()` method takes an integer as an input and returns the given number as a string in which the  
fraction is padded to the input integers length. The input integer ranges from 0 to 20 decimals. It rounds off  
to nearest ceiling or flooring value based on the later digits. If it is greater than 5 then it will take the  
ceiling value else it will take the flooring value. It returns the output as a *string*.  
Example:  
```
//Input:
let a = 3.14159265359;
let b = a.toFixed(2);
console.log(b);

//Output:
//"3.14"
```

The `Math.round()` method is used to round to the nearest integer value. It takes number which needs to be rounded  
off as an input. It returns the output as a number.  

To round off any number to any decimal place, we can use this method by first multiplying the input number with 10 ^  
decimal place, so for example with 2 that is `Math.round(3.14159265359 * (10 ^ 2))`, and then divide it by 10 ^ decimal  
place like `Math.round(3.14159265359 * (10 ^ 2)) / (10 ^ 2)`, so it will now round off the given number to 2 decimal places.

Example:
```
//Input:
Math.round(3.14159265359 * 100) / 100

//Output:
3.14
```  


**Use a custom-made function:**  
```
let roundOff = (num, places) => {
  const x = Math.pow(10,places);
  return Math.round(num * x) / x;
}
```