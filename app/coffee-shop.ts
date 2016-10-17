class WeekdayAtTheCoffeeShop {
  constructor(pastries, coffee) {
    pastries.setup();
    coffee.brew();
    register.setup();
    clean();
    unlockDoors();
  }
}

// a Friday.
class FridayAtTheCoffeeShop extends WeekdayAtTheCoffeeShop {
  constructor(pastries, coffee) {
    // still receiving pastries and coffee, but this time, we pass in donuts as the day's pastry!
    this.donuts = pastries;
    super(pastries, coffee);
  }
}
