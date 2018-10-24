/*
   A function to create a HTML-table
   Using plain JS and standard DOM API

*/

// The function to implement
function createTable(rows, cols, data) {
    var tbl = document.createElement('table');
    var tbdy = document.createElement('tbody');
    var k = 0;
    for (var i = 0; i < rows; i++) {
        var tr = document.createElement('tr');
        if (i % 2 === 0) {
            tr.style.background = "lightgray";
        } else {
            tr.style.background = "white";
        }
        for (var j = 0; j < cols; j++) {
            var td = document.createElement('td');
            var text = document.createTextNode(data[k++]);
            td.appendChild(text);
            tr.appendChild(td);
        }
        tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    return tbl;
}

// Dummy data
var data = "The Document Object Model (DOM) is a programming interface for" +
"HTML, XML and SVG documents. It provides a structured representation of the" + " document as a tree. The DOM defines methods that allow access to the tree," + " so that they can change the document structure, style and content.";

// Executed at download
var parent = document.getElementById("parent");
var table = createTable(10, 5, data.split(" "));
parent.appendChild(table);
