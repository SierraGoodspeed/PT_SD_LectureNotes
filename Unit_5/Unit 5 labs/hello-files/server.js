const express = require(`express`);

const app = express();

const PORT = 5000;

app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`)
});  // app.listen: This is a method provided by the Express.js library that starts the server and makes it listen for incoming HTTP requests.

// PORT: This is a variable that holds the port number on which the server should listen. It is typically defined earlier in the code as a constant, such as const PORT = 5000;.

// () => { console.log(Server is running on port ${PORT}); }: This is a callback function that is called when the server starts listening on the specified port. In this case, it simply logs a message to the console indicating that the server is running and on which port it is running.

// So when this line of code is executed, the Express.js server will start listening on the specified port, and the callback function will be called to log a message indicating that the server is running.

// To serve the index.html file from my server, I need to set up a route that handles requests to the root path ("/").
const path = require('path');

/* 
const path = require('path'); imports the built-in Node.js path module, which provides utilities for working with file and directory paths.
*/

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, `/public/index.html`));
}); 

/* 

app.get('/', ...) is an HTTP GET method in Express.js that sets up a route for requests made to the root path ('/').

(req, res) => {...} is the callback function that gets executed when a GET request is made to the specified route. req is the request object that contains information about the incoming request, and res is the response object that is used to send a response back to the client.

res.sendFile(...) is a method that sends a file to the client in response to the request. In this case, res.sendFile(path.join(__dirname, /public/index.html)) sends the index.html file that is located in the public directory to the client.

path.join(__dirname, '/public/index.html') is used to construct the absolute path of the file to be sent to the client. __dirname is a Node.js global variable that represents the directory of the current module. path.join() is a method in the built-in path module of Node.js that concatenates the directory path with the filename to create the absolute path of the file.

So when a client makes a GET request to the root URL of the server, the app.get() method handles the request and executes the callback function, which then sends the index.html file located in the public directory to the client using the res.sendFile() method.
*/


app.use(express.static (path.join(__dirname, `public`)));
console.log('Static middleware initialized');

/* 
app.use(express.static(path.join(__dirname, 'public'))); sets up the Express middleware to serve static files from the public directory.

Here's a step-by-step breakdown of the code:

__dirname is a global variable in Node.js that represents the directory where the currently executing script resides.
path.join(__dirname, 'public') joins the public directory to the __dirname directory to create an absolute path to the public directory.
express.static is a middleware function provided by Express that serves static files. The argument passed to it is the directory from which to serve static files.
app.use sets up middleware functions to be used for every incoming request. In this case, it sets up the static middleware to serve static files from the public directory.
So, when a client requests a static file (e.g., a CSS or JavaScript file) from the server, Express will look for the file in the public directory and send it to the client if it exists.
*/