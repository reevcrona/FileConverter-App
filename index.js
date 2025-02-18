import express from "express";
import multer from "multer";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { saveFile } from "./saveFile.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

const port = 6969;
const storage = multer.memoryStorage();
const upload = multer({ storage });
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "public", "index.html"));
});
app.post("/upload", upload.single("file-input"), (req, res) => {
  console.log(req.file.mimetype.split("/")[1]);
});
app.listen(port, (err) => {
  if (err) {
    console.error(err);
  }
  console.log(`Server is up and running on port ${port}`);
});
