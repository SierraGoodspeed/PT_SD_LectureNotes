const express = require(`express`)
const app = express()
const PORT = 6000
const log = console.log

app.listen(PORT, () => {
    log(`Server is listening on port ${PORT}`)
})

// Middleware to parse request body
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/madlibs.html');
  });
  
  app.get('/first-word', (req, res) => {
    res.send(`
      <form method="POST" action="/second-word">
        <label for="noun">Enter a noun:</label>
        <input type="text" id="noun" name="noun" placeholder="e.g. cat">
        <button type="submit">Next</button>
      </form>
    `);
  });
  
  app.post('/second-word', (req, res) => {
    const noun = req.body.noun;
    log(noun);
    res.send(`
      <form method="POST" action="/third-word">
        <label for="verb">Enter a verb:</label>
        <input type="text" id="verb" name="verb" placeholder="e.g. run">
        <button type="submit">Next</button>
      </form>
    `);
  });
  
  app.post('/third-word', (req, res) => {
    const verb = req.body.verb;
   log(verb);
    res.send(`
      <form method="POST" action="/fourth-word">
        <label for="adjective">Enter an adjective:</label>
        <input type="text" id="adjective" name="adjective" placeholder="e.g. blue">
        <button type="submit">Next</button>
      </form>
    `);
  });
  
  app.post('/fourth-word', (req, res) => {
    const adjective = req.body.adjective;
    log(adjective);
    res.send(`
      <form method="POST" action="/fifth-word">
        <label for="adverb">Enter an adverb:</label>
        <input type="text" id="adverb" name="adverb" placeholder="e.g. quickly">
        <button type="submit">Next</button>
      </form>
    `);
  });
  
  app.post('/fifth-word', (req, res) => {
    const adverb = req.body.adverb;
    log(adverb);
    res.redirect('/story');
  });
  

  app.get('/story', (req, res) => {
    const noun = req.query.noun;
    const verb = req.query.verb;
    const adjective = req.query.adjective;
    const adverb = req.query.adverb;
  
    res.send(`
      <h1>Your Story</h1>
      <p>Once upon a time, there was a ${adjective} ${noun} who loved to ${verb} ${adverb}.</p>
    `);
  });

  
  
