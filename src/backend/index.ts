import express = require("express");
import path = require("path");
const app = express();
const port = 8080;

const custPath = path.join(__dirname, "../../");
app.use("/static", express.static("./dist"));
app.get("*", (req, res) => res.sendFile(custPath + "/index.html"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
