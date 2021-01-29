## Tests
```
Describe: Pizza()
  Test: "It should construct a Pizza object."
  Code: let testPizza = new Pizza();
  Expect(testPizza).toEqual(Pizza {});

  Test: "It should construct a Pizza object with two properties, size and toppings."
  Code: let testPizza = new Pizza("", []);
  Expect(testPizza).toEqual(Pizza {size: "", toppings: []});
```
