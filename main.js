//= laz r
//= 02-20-2026 14:57
//= main.js

//= Dependencies =//
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("static"));

app.get("/", (req, res) => {
    res.type("text/html").send("<html><body><h1>Hiya!</h1></body></html>");
});

app.listen(PORT, () => {
    console.log(`Express server listening on port: ${PORT}`);
});