const express = require("express");
const bodyParser = require("body-parser");

const bookingController = require("./controllers/bookingController");

const app = express();

app.use(bodyParser.json());

/* Home route (for browser test) */
app.get("/", (req, res) => {
  res.send("Redis Locking Mechanism API Running");
});

/* Booking route */
app.post("/book-seat", bookingController.bookSeat);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});