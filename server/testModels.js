const Restaurant = require('./models/Restaurant');

const restaurant = new Restaurant();

restaurant.addTable(1, 4);
restaurant.addTable(2, 2);

console.log("Tables disponibles au début:");
console.log(restaurant.getAvailableTables());

restaurant.makeReservation(1, "user1", "2026-02-14", "19h-21h");

console.log("Après réservation:");
console.log(restaurant.tables);
console.log("Réservations:");
console.log(restaurant.reservations);
console.log("Avant libération:");
console.log(restaurant.tables);

restaurant.releaseTable(1);

console.log("Après libération:");
console.log(restaurant.tables);