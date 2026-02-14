function Reservation(id, tableId, userId, date, timeSlot) {
    this.id = id;
    this.tableId = tableId;
    this.userId = userId;
    this.date = date;
    this.timeSlot = timeSlot;
}

Reservation.prototype.validate = function () {
    return this.tableId && this.userId;
};

Reservation.prototype.cancel = function () {
    return true;
};

module.exports = Reservation;