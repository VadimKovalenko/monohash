import path from "path";
import express, { json, urlencoded } from "express";
import cors from "cors";
import morgan from "morgan";
import encrypt from "./encryptHelper.js";
import decrypt from "./decryptHelper.js";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express();
app.use(morgan("combined"));
app.use(json());
app.use(
  urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(express.static(__dirname + "/dist/"));

app.get(/.*/, function (req, res) {
  res.send(__dirname + "/dist/index.html");
});

app.post("/encrypt", async (req, res) => {
  const { text, password } = req.body;
  let encryptRes;
  encryptRes = await encrypt(text, password);
  res.send(encryptRes);
});

app.post("/decrypt", (req, res) => {
  const text = req.body.text;
  const password = req.body.password;
  let decryptRes;
  try {
    decryptRes = decrypt(text, password);
    res.send(decryptRes);
  } catch (e) {
    res.status(500).send(e);
  }
});

// eslint-disable-next-line no-undef
app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running");
});
