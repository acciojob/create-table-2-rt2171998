function createTable() {
  //Write your code here
const row = prompt("Input number of rows")
const column = prompt("Input number of columns")
const table = document.getElementById("myTable")
const tbody = document.createElement("tbody")
table.appendChild(tbody)

let tr = ``;
for(let i = 0; i < row; i++){
	  tr = `<tr>`
	  for(let j = 0; j < column; j++){
	    tr += `<td>Row-${i} Column-${j}</td>`
	  }
	  tr += `</tr>`
	  tbody.innerHTML += tr
	}
}
