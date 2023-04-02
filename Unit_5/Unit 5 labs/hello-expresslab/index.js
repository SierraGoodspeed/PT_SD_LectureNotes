// Access Express & it's methods; we can do that via require
const express = require(`express`); // being pulled from node modules
// We want a simple var to make calls, set express to app
const app = express(); // simplify our method calls
// Create PORT number to run the app on our local machine 
// Server port w/in localhost. Using "all caps" indicates a "general" variable.
const PORT = process.env.PORT || 5000;

// Create a method that "listens" for us spinning up/starting our application.
// This will need our PORT # and a callback function
// First call our app var, use the .listen method, pass that method the port var and create a CB func to give us some feedback(console.log)
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});

// To start sever, in terminal at the project directory (the folder) run command: npm run start or for normal people: nodemon
app.get('/', (req, res) => {
    res.setHeader(`Content-type`, `text/plain`);
    res.send('Hello, home!');
});

app.get('/about', (req, res) => {
    res.setHeader(`Content-type`, `text/plain`);
    res.send('This is the about page!');
});

app.get('/key', (req, res) => {
    console.log(req.query.key);
    res.send('Received key!'); 
});

app.get('/:page', (req, res) => {
    const page = req.params.page;
    res.setHeader('Content-Type', 'text/html');
    res.send(`<h1>Hello, you are on the ${page}!</h1>`)
});
