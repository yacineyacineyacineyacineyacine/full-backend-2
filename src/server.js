import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __direname = dirname(__filename);

app.use(express.static(path.join(__direname, "../public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__direname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
