/*
    Service to execute AJAX call to backend
*/

class AuthorService {

  constructor() {
    // Possible need to modify this
    this.baseUrl = "http://localhost:45513/ws4/rest/author/";
    //this.baseUrl = "http://localhost:8080/api/authors/";
  }

  findAll(callback) { // Callback is a function
    window.$.ajax({ // Use ugly global variable!
        url: this.baseUrl,
        method: "GET",
        context: this // MUST have!!!
      }).done(data => { // Success!
        console.log("Get authors returned " + data);
        callback(data);
      })
      .fail(msg => { // Exception!
        console.log(msg);
      })
  }

  create(author, callback) {
    // NOT tested, just a hint ...
    window.$.ajax({
        url: this.baseUrl,
        data: author,
        method: "POST",
        dataType: "json",
        crossDomain: true,
        context: this, // MUST have!!!
      }).done(data => {
        callback(data);
      })
      .fail(msg => {
        console.log(msg);
      })
  }

  find(id, callback) {
    // NOT tested, just a hint ...
    $.ajax({
        url: this.baseUrl + id,
        method: "GET",
        context: this
      }).done(data => {
        callback(data);
      })
      .fail(msg => {
        console.log(msg);
      })
  }
  delete(id, callback) {
    window.$.ajax({
        url: this.baseUrl + id,
        method: "DELETE",
        dataType: "json",
        crossDomain: true,
        context: this
      }).done(data => {
        callback(data);
      })
      .fail(msg => {
        console.log(msg);
      })
  }

  update(author, callback) {
    window.$.ajax({
        url: this.baseUrl + author.id,
        data: author,
        method: "PUT",
        dataType: "json",
        crossDomain: true,
        context: this
      }).done(data => {
        callback(data);
      })
      .fail(msg => {
        console.log(msg);
      })
  }
}

// Export object
export const authService = new AuthorService();
