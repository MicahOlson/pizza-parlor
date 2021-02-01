function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.sumCost = function() {
  let sizePrice;
  if (this.size === "Small ($10.00)") {
    sizePrice = 10;
  } else if (this.size === "Medium ($15.00)") {
    sizePrice = 15;
  } else if (this.size === "Large ($20.00)") {
    sizePrice = 20;
  }
  return sizePrice + ((this.toppings.length - 1) * .75);
}

$(document).ready(function() {
  $("form.frmPizza").submit(function(event) {
    event.preventDefault();
    $("span#btnLabel").text("Update order")
    const pizzaSize = $("input:radio[name=radPizza]:checked").val();
    let pizzaToppings = [];
    $("input:checkbox[name=chkToppings]:checked").each(function() {
      pizzaToppings.push($(this).val());
    });
    
    let customPizza = new Pizza(pizzaSize, pizzaToppings);
    $("ul#orderToppings li").remove();
    $(".orderDetails").slideDown();
    $("#orderSize").text(customPizza.size);
    customPizza.toppings.forEach(function(topping) {
      $("ul#orderToppings").append("<li><b>" + topping + "</b></li>");
    });
    
    $("#orderCost").text(customPizza.sumCost().toFixed(2));
  });
  
  $("button#submitOrder").click(function() {
    $("#orderConfirmation").show();
    $("button").remove();
  });
});