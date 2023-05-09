import express from "express";
import { config } from "dotenv";

config();
const app = express();

const port = process.env.PORT || 3030;

app.get("/", (req, res) => {
  res.send(`🔥 Start in Port = ${port} 🔥`);
});

app.listen(port, () => console.log(`🔥 Start server port = ${port} 🔥`));
