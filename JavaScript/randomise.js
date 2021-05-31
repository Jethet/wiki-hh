// Randomize properties, example: random color from an array of colors

let colors = [
  "#aed6f1",
  "#76d7c4",
  "#f7dc6f",
  "#f8c471",
  "#e74c3c",
  "#f1c40f",
  "#c39bd3",
  "#a569bd",
  "#45b39d",
  "#28b463",
  "#eb984e",
  "#27ae60",
  "#05E3EE",
  "#3498db",
  "#dc7633"
]

let color = colors[Math.floor(Math.random() * colors.length)]

console.log(color);

