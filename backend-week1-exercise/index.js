// WEEK 1:

// 1- IMPORTING WITH EXPRESS INSTEAD OF HTTP
const express = require('express');
const server = express();

// define path in a string variable

// The use method 
server.get("/", (req, res)=>{
  res.send("<h1>Welcome To Homepage with my express server</h1>");
})

server.get("/login", (req, res)=>{
  res.send("<h1>Welcome To Login Page with my express server</h1>");
})

// CLASS EXERCISE: Add a new route (e.g., /about) and send a custom response
server.get("/about", (req, res)=>{
  res.send("<h1>Welcome To About Page</h1>");
})

server.use((req, res)=> res.status(404).send("<h1>Page Not Found</h1>"))

server.listen(3000, '127.0.0.1', () => {
    console.log('Server is running on port 3000');
});






















// PREVIOUSLY WITH HTTP MODULE:

// WEEK 1 - DAY 5 - HTTP MODULE:

// we are requiring http module and creating a server

// USING HTTP MODULE TO CREATE A SERVER
// const http = require('http');
// const handleAllRequest = (requestObject, responseObject) => {
//     console.log('Hi, I am Handling a request');
//     const url = requestObject.url;
//     // console.log(requestObject); 
//     // responseObject.write("Is this your response?\n");
//     // responseObject.write("Do you want to continue processing this request?");
//     if (url === '/') {
//         responseObject.write('<h1>Welcome To Homepage</h1>');
//     } else if (url === '/login') {
//         responseObject.write('<h1>Welcome To Login Page</h1>');
//     } else if (url === '/logout') {
//         responseObject.write('<h1>Welcome To Logout Page</h1>');
//     // CLASS EXERCISE: Add a new route (e.g., /about) and send a custom response.
//     } else if (url === '/about') {
//         responseObject.write('<h1>Welcome To About Page</h1>');
//     } else {
//         responseObject.write('<h1>Page Not Found</h1>');
//     }
//     responseObject.end();
// };
// we are going to use our http to create a server and listen to port 3000
// created server
// const server = http.createServer(handleAllRequest);