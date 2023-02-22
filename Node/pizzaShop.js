const EventEmitter = require("node:events");

class PizzaShop extends EventEmitter {
	constructor() {
		super();
		this.orderNumber = 0;
	}

	order(size, topping) {
		this.orderNumber++;
		this.emit("Order", size, topping);
	}

	orderDrink(size) {
		this.orderNumber++;
		this.emit("Drink Order", size);
	}

	displayOrderNumber() {
		console.log(`Current order number: ${this.orderNumber}`);
	}
}

module.exports = PizzaShop;
