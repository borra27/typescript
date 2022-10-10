{
  type CoffeeCup = {
    shot: number;
  };

  const BEANS_GRAMM_PER_SHOT: number = 20;
  let coffeeBeans = 0;

  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_GRAMM_PER_SHOT)
      throw new Error("No enough coffee beans");

    coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;
    return {
      shot: shots,
    };
  }

  coffeeBeans += 80;
  const coffee = makeCoffee(2);
  console.log(coffee);
}
