import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
let data = [
  { id: 1, name: "SBAC" },
  { id: 2, name: "SBAC" },
];
let curID = 2;
app.get("/books", (req, res) => {
  res.json(data);
});
app.post("/books", (req, res) => {
  let { name } = req.body;
  console.log(name);
  curID++;
  data.push({ id: curID, name: name });
  res.json(data);
});
app.put("/books/:id", (req, res) => {
  let { id } = req.params;
  let { name } = req.body;
  data = data.map((item) => (item.id == id ? { ...item, name } : item));
  res.json(data);
});
app.delete("/books/:id", (req, res) => {
  let { id } = req.params;
  data = data.filter((item) => item.id != id);
  res.json(data);
});
app.listen(3000, () => console.log("server is running 3000"));
