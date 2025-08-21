class PizzaDirector {
    constructor(builder) {
        this.builder = builder
    }

    makeMargherita() {
        return this.builder
            .addTopping("tomato")
            .addTopping("basil")
            .build()
    }

    makePepperoni() {
        return this.builder
            .setSize("large")
            .setCrust("thick")
            .addTopping("pepperoni")
            .build()
    }
}

module.exports = PizzaDirector