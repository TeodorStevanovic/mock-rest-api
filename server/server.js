import express from "express";

const app = express();
const PORT = 3001;

app.get("/status", (req, res) => res.json({ status: "ok" }));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
