const express = require("express");
const { useProducer } = require("./kafka-producer");
const app = express();
const port = process.argv[2] || 3000;

app.use(express.static("public"));
app.use(express.json());

const setup = async () => {
  const { sendMessage } = await useProducer();

  app.route("/api").post((req, res) => {
    sendMessage(JSON.stringify(req.body));
    res.end();
  });

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
};

setup();
