const redisClient = require("../redisClient");

const bookSeat = async (seatId) => {

  const lockKey = `lock:${seatId}`;

  const lock = await redisClient.set(lockKey, "locked", {
    NX: true,
    EX: 10
  });

  if (!lock) {
    return {
      success: false,
      message: "Seat already locked"
    };
  }

  return {
    success: true,
    message: "Seat booked successfully"
  };
};

module.exports = { bookSeat };