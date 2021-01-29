## Tests
```
Describe: Pizza()
  Test: "It should construct a Pizza object."
  Code: let testPizza = new Pizza();
  Expect(testPizza).toEqual(Pizza {});

  Test: "It should construct a Pizza object with two properties, size and toppings."
  Code: let testPizza = new Pizza("", []);
  Expect(testPizza).toEqual(Pizza {size: "", toppings: []});

Decribe: Pizza.prototype.sumCost()
  Test: "It should return the cost of a plain, cheese pizza based on size."
  Code: let testPizza = new Pizza("medium", []);
  Expect(testPizza.sumCost()).toEqual(15);
```
