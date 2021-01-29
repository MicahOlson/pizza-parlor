## Tests
```
Describe: Pizza()
  Test: "It constructs a Pizza object."
  Code: let testPizza = new Pizza();
  Expect(testPizza).toEqual(Pizza {});

  Test: "It constructs a Pizza object with two properties, size and toppings."
  Code: let testPizza = new Pizza("", []);
  Expect(testPizza).toEqual(Pizza {size: "", toppings: []});

Decribe: Pizza.prototype.sumCost()
  Test: "It returns the cost of a plain, cheese pizza based on size."
  Code: let testPizza = new Pizza("medium", []);
  Expect(testPizza.sumCost()).toEqual(15);

  Test: "It returns the cost of a pizza based on size and number of toppings."
  Code: let testPizza = new Pizza("medium", ["pepperoni", "artichoke", "onion"]);
  Expect(testPizza.sumCost()).toEqual(17.25);
```
