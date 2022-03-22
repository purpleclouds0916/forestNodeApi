const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')
const app = express();
app.use(cors())
const port = 3000;

app.use(express.json());

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/calculation", (req, res) => {
  const java = require("java");

  java.classpath.push("OptimThinningJNI-1.0.jar");

  const javaObject = java.import("thinningoptim.SA2021");

  console.log(JSON.stringify(req.body));

  //Javaに送って実行
  let SH_S = javaObject.runSync(JSON.stringify(req.body));

  console.log(SH_S);

  res.json(SH_S);
});


app.listen(port, () => {
  console.log(`Listening on port at http://localhost:${port}`);
});
