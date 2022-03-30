//Dependencies
const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

//handles parsing content in the req.body from post/update requests
app.use(express.json());

//serves the hmtl file of the application as default on load
const distPath = path.resolve(__dirname, "..", "dist");

app.use(express.static(distPath));

/**
 * handles incoming requests from the client side
 */

// app.get("/", (req, res) => {
//   // Sending This is the home page! in the page
//   res.status(200).send(app.use(express.static(distPath)));
// });

// Routes

app.get('/', (req, res) => {
  res.send('<a href="/auth/google">Authenticate with google</a>')
});

app.get('/!!user')



router.get('/login', function(req, res, next) {
  res.render('login')
});


// launches the server from localhost on port 5555
let PORT = 5555;
app.listen(PORT, () => {
  console.log(`
  Listening at: http://localhost:${PORT}
  `);
});

//app.use(express.urlencoded({ extended: true }));
