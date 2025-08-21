const Pizza = require("./Pizza")

class PizzaBuilder {
    constructor() {
        this.reset()
    }

    reset() {
        this.size = "medium"
        this.crust = "thin"
        this.cheese = true
        this.toppings = []
        return this
    }

    setSize(size) {
        this.size = size
        return this
    }

    setCrust(crust) {
        this.crust = crust
        return this
    }

    setCheese(cheese) {
        this.cheese = cheese
        return this
    }

    addTopping(topping) {
        this.toppings.push(topping)
        return this
    }

    build() {
        const pizza = new Pizza(this.size, this.crust, this.cheese, this.toppings)
        this.reset() // Reset the builder for future use
        return pizza
    }
}

module.exports = PizzaBuilder