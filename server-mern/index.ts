const express = require("express")
const app = express();
const port = 5555;

//create 4 routes
// "/" the default route which is just an h1 element with the text zoo app
app.get("/", (req, res) => {
  res.send("<h1>Zoo app</h1>");
});

// "/animal/int:id" returns an unordered list containg the animal's information for
// the animal, who's id matches the url.
app.get("/", (req, res) => {
  res.send("<h1>Zoo app</h1>");
});

// "/zookeeper/int:id" returns an unordered list containg the zookeeper's information for
// the zookeeper, who's id matches the url.
app.get("/", (req, res) => {
  res.send("<h1>Zoo app</h1>");
});

// "/enclosure/int:id" returns an unordered list containg the enclosure's information for
// the enclosure, who's id matches the url.
app.get("/", (req, res) => {
  res.send("<h1>Zoo app</h1>");
});

app.listen(port, () => {
  console.log(`Listening on ${port}`)
})