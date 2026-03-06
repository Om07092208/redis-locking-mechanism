const redisClient = require("../redisClient");

exports.bookSeat = async (seat) => {

    const lockKey = `lock:seat:${seat}`;

    const lock = await redisClient.set(lockKey, "locked", {
        NX: true,
        EX: 10
    });

    if (!lock) {
        return { message: "Seat already locked by another user" };
    }

    console.log("Booking seat:", seat);

    return { message: "Seat booked successfully" };
};