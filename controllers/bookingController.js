const bookingService = require("../services/bookingService");

const bookSeat = async (req, res) => {

  const { seatId } = req.body;

  const result = await bookingService.bookSeat(seatId);

  res.json(result);
};

module.exports = { bookSeat };