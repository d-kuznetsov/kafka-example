const express = require("express");
const { useConsumer } = require("./kafka-consumer");

const app = express();
const port = process.argv[2] || 8080;
const groupId = process.argv[3] || 1;

app.use(express.static("public"));
app.use(express.json());

const db = [];

app.route("/api").get(function (_, res) {
  res.json(db);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/admin.html`);
});

useConsumer((message) => {
  db.push(JSON.parse(message))
  console.log("Message", message)
}, groupId);
