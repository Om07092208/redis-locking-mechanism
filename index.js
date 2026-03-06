const express = require("express");
const bodyParser = require("body-parser");

const bookingController = require("./controllers/bookingController");

const app = express();
app.use(bodyParser.json());

app.post("/book-seat", bookingController.bookSeat);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});