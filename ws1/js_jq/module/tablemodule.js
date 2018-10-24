/*
     An ES6 module exporting a Table class
     This is ECMA-script 6 (ES6 or ES2015)

     This uses JQuery for DOM maipulation
*/
export class Table {

  constructor(rows, cols, data, striped) {
    this.rows = rows;
    this.cols = cols;
    this.data = data;
    this.striped = striped;
  }

  render() {
    let tbl = document.createElement('table');
    let tbdy = document.createElement('tbody');
    let k = 0;
    for (let i = 0; i < this.rows; i++) {
      let tr = document.createElement('tr');
      if (i % 2 === 0 && this.striped === true) {
        tr.style.background = "lightgray";
      } else {
        tr.style.background = "white";
      }
      for (let j = 0; j < this.cols; j++) {
        let td = document.createElement('td');
        let text = document.createTextNode(this.data[k++]);
        td.appendChild(text);
        tr.appendChild(td);
      }
      tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    return tbl;
  }

  edit(row, col, value) {
    this.data[row * this.cols + col] = value;
  }

}
