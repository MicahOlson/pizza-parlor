function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.sumCost = function() {
  let sizePrice;
  if (this.size === "small") {
    sizePrice = 10;
  } else if (this.size === "medium") {
    sizePrice = 15;
  } else if (this.size === "large") {
    sizePrice = 20;
  }
  return sizePrice + (this.toppings.length * .75);
}

$(document).ready(function() {
  $(".frmPizza").submit(function(event) {
    event.preventDefault();
    const pizzaSize = $("input:radio[name=radPizza]:checked").val();
  })
});