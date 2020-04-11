const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello pagli");
});

// Start a server
const PORT = 8000;
app.listen(PORT, () => console.log(`Server Running at ${PORT}`));
