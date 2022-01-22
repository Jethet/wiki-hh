let o = new Intl.DateTimeFormat("es" , {
  timeStyle: "short"
});
console.log(o.format(Date.now())); // "13:31 AM"

let x = new Intl.DateTimeFormat("es" , {
  dateStyle: "short", timeStyle: "short"
});
console.log(x.format(Date.now()))

let z = new Date().toLocaleString("nl")
console.log(z);
;
