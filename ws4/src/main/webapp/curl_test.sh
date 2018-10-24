#!/bin/bash
# This is (should be) an executable script (bash script)
# to test some database functionality

# (Re)create database 
#curl -v http://localhost:45513/ws4/rest/db

# Options (used by CORS preflight)
curl -v -X OPTIONS http://localhost:45513/

# Get all Authors 
curl -v -H "Accept: application/json" http://localhost:45513/ws4/rest/author 

# Get single Author
curl -v -H "Accept: application/json" http://localhost:45513/ws4/rest/author/FF

# Get primitive type (number of authors)
curl -v -H "Accept: application/json" http://localhost:45513/ws4/rest/author/count

# Create new (NOTE: exception if run more times ... use delete) Using form parameters
curl -v POST  http://localhost:45513/ws4/rest/author --data "id=QQ&firstName=Qbert&lastName=Qson&email=qson@mail"

# Create new (NOTE: exception if run more times ... use delete) Using JSON
curl -v -H "Content-Type: application/json" POST http://localhost:45513/ws4/rest/author --data '{"id":"XX", "firstName": "Xbert", "lastName": "Xson", "email":"xson@mail", "address" : null}'

# Update an Author
curl -v -H "Content-Type: application/json" -X PUT http://localhost:45513/ws4/rest/author/XX --data '{"id":"XX", "firstName": "NEWbert", "lastName": "NEWson", "email":"NEW@mail", "address" : null}'

# Delete (last part of URL is id)
curl -v -X  DELETE http://localhost:45513/ws4/rest/author/XX 

# Testing CORS use other origin 
curl -v -H "Origin: http://www.example.com" -H "Accept: application/json" http://localhost:45513/ws4/rest/author
----------------------------------

# Get all Books
curl -v -H "Accept: application/json" http://localhost:45513/ws4/rest/book 

# Get single Book
curl -v -H "Accept: application/json" http://localhost:45513/ws4/rest/book/1234

# Get primitive type (number of books)
curl -v -H "Accept: application/json" http://localhost:45513/ws4/rest/book/count

# Create new (NOTE: exception if run more times ... use delete) Using form parameters
curl -v POST  http://localhost:45513/ws4/rest/book --data "isbn=666&title=Bible&genre=THRILLER&price=66.6"

# Create new (NOTE: exception if run more times ... use delete) Using JSON
curl -v -H "Content-Type: application/json" POST http://localhost:45513/ws4/rest/book --data '{"isbn":"444", "title": "God", "genre": "BIOGRAPHY", "price":"44.4"}'

# Update an Book
curl -v -H "Content-Type: application/json" -X PUT http://localhost:45513/ws4/rest/book/444 --data '{"isbn":"444", "title": "Wow", "genre": "THRILLER", "price":"999"}'

# Delete (last part of URL is id)
curl -v -X  DELETE http://localhost:45513/ws4/rest/book/444

# Testing CORS use other origin 
curl -v -H "Origin: http://www.example.com" -H "Accept: application/json" http://localhost:45513/ws4/rest/book

