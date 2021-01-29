function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.sumCost = function() {
  let sizePrice;
  if (this.size === "Small") {
    sizePrice = 10;
  } else if (this.size === "Medium") {
    sizePrice = 15;
  } else if (this.size === "Large") {
    sizePrice = 20;
  }
  if (this.toppings.length < 1) {
    return sizePrice;
  } else {
  return sizePrice + (this.toppings.length * .75);
  }
}

$(document).ready(function() {
  $("form.frmPizza").submit(function(event) {
    event.preventDefault();
    const pizzaSize = $("input:radio[name=radPizza]:checked").val();
    let pizzaToppings = [];
    $("input:checkbox[name=chkToppings]:checked").each(function() {
      pizzaToppings.push($(this).val());
    });
    
    let customPizza = new Pizza(pizzaSize, pizzaToppings);

    $("ul#orderToppings li").remove();
    $("#orderSize").text(customPizza.size);
    customPizza.toppings.forEach(function(topping) {
      $("ul#orderToppings").append("<li>" + topping + "</li>");
    });
    $("#orderCost").text(customPizza.sumCost());
  });
});