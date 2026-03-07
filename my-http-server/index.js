// we are requiring http module and creating a server
const http = require('http');

const handleAllRequests =(requestObject, responseObject)=>{
  console.log('resquest received on PORT 3050');
  const url = requestObject.url;
  if(url === '/')

  // console.log(requestObject, responseObject);
  responseObject.write("<h1>HOME PAGE</h1>");
  responseObject.end();
} 
// we are going to use our http to create a server and our server will listen to our requests and responses


// created server using http module and we are going to use our server to listen to our requests and responses
const server =http.createServer(handleAllRequests)

// listening to our server:
server.listen(3050,"127.0.0.1", ()=>console.log("server started"));

