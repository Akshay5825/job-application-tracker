const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let jobs = [];

app.get("/jobs", (req, res) => {
    res.json(jobs);
});

app.post("/jobs", (req, res) => {
    const job = req.body;
    jobs.push(job);
    res.json({ message: "Job added successfully" });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});