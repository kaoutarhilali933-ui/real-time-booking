const Table = require('./Table');
const Reservation = require('./Reservation');

function Restaurant() {
    this.tables = [];
    this.reservations = [];
}

Restaurant.prototype.addTable = function (id, capacity) {
    const table = new Table(id, capacity);
    this.tables.push(table);
};

Restaurant.prototype.findTableById = function (id) {
    return this.tables.find(table => table.id === id);
};

Restaurant.prototype.makeReservation = function (tableId, userId, date, timeSlot) {
    const table = this.findTableById(tableId);

    if (!table || !table.isAvailable()) {
        return null;
    }

    table.reserve();

    const reservation = new Reservation(
        this.reservations.length + 1,
        tableId,
        userId,
        date,
        timeSlot
    );

    this.reservations.push(reservation);
    return reservation;
};

Restaurant.prototype.releaseTable = function (tableId) {
    const table = this.findTableById(tableId);
    if (!table) return false;

    table.release();
    return true;
};

Restaurant.prototype.getAvailableTables = function () {
    return this.tables.filter(table => table.isAvailable());
};

module.exports = Restaurant;