/*
   Collection of Books
*/
import {
  Book
} from "./book.js"
import {
  eventBus as eB
} from "../util/eventBus.js"
import {
  bookService as bs
} from "../service/bookService.js"

class Publication {

  constructor() {
    // Test data used when not connected to back end
    this.books = [
        new Book("123","Title1", 10.0),
        new Book("456","Title2", 12.0),
        new Book("789","Title3", 14.0)
      ];

  }

  find(isbn) {
    return this.books.find(b => b.isbn === isbn);
  }

  findAll() {
    // When using AJAX uncomment this
    bs.findAll(data => {
      return eB.notify("", data);
    })
    // No backend use this, comment out when using AJAX
    //return this.books;
  }

  create(book) {
    bs.create(book, data => {
        return eB.notify("ADD", data);
    })

    //this.books.push(book);
    //eB.notify("ADD", this.books); // First param not used
  }

  update(book) {
    bs.update(book, data => {
        return eB.notify("UPDATE", data);
    })

   /* var b = this.find(book.isbn);
    this.books = this.books.filter(elem => elem !== b);
    this.books.push(book);
    eB.notify("UPDATE", this.books);*/
  }

  delete(isbn) {
    bs.delete(isbn, data => {
        return eB.notify("DELETE", data);
    })

    /*var b = this.find(isbn);
    this.books = this.books.filter(elem => elem !== b);
    eB.notify("DELETE", this.books);*/
  }
}

// Singleton
export const bookReg = new Publication();
