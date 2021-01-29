function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.sumCost = function() {
  if (this.size === "small") {
    return 10;
  } else if (this.size === "medium") {
    return 15;
  } else if (this.size === "large") {
    return 20;
  }
}