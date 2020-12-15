const epxress = require("express");
const cors = require("cors");

const app = epxress();
app.use(cors());

// Constants
const PORT = 3000;
const HOST = "0.0.0.0";

// App
app.get("/", (req, res) => {
  if (!req.query.name) {
    res.status(400).send({
      error: "querystring name is missing",
    });
  }

  res.status(200).send({
    message: `Good morning ${req.query.name || "Stranger"}`,
  });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
