const bookingService = require("../services/bookingService");

exports.bookSeat = async (req, res) => {
    const seat = req.body.seat;
    const result = await bookingService.bookSeat(seat);
    res.send(result);
};