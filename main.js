//= laz r
//= 02-20-2026 14:57
//= main.js

//= Dependencies =//
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("static"));

app.get("/", (req, res) => {
    res.type("html").send("index.html");
});

app.listen(PORT, () => {
    console.log(`Express server listening on port: ${PORT}`);
});