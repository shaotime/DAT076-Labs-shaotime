/*
    Test groud for the authorService.js. Testing AJAX calls
*/

import {
  authService as as
} from "../service/authorService.js"

as.findAll(data => {
  console.log(data);
});

as.find("FF", data => {
  console.log(data);
});

let a = new Author("HH", "Smith", "Kevin", "ks@gmail.com", "Random Address 123")
as.create(a, data => {
  console.log(data);
})

as.delete("HH", data => {
  console.log(data);
})

let a2 = new Author("II", "Smoth", "Cevin", "cs@gmail.com", "Random Address 321")
as.update(a2, data => {
  console.log(data);
})


