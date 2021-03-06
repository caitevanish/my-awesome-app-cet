//A simple project for learning the various aspects of Advanced GitHub and GitHub Actions in the CI/CD process. 

//Testing the new GitHub Actions by making THIS change to the source code.

const express = require("express");
const app = express();
//Simple Hello World Node App
const APP_PORT = process.env.APP_PORT || 3000;
app.get("/", (req, res) => {
  res.send("Hello Caitlin and the rest of the world out there!");
});
app.listen(APP_PORT, () => {
  console.log(`Running app at port:${APP_PORT}`);
});

