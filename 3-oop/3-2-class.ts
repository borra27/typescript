{
  type CoffeeCup = {
    shots: number;
  };

  class CoffeeMachine {
    // static 이 없다면 인스턴스를 만들떄마다 중복적으로 데이터가 사용됨
    // ex) Math.round ...const math = new Math() 처럼 인스터화해서 사용하지 않았음
    // Math 안에 있는 함수들은 class level 에 있기 떄문
    static BEANS_GRAMM_PER_SHOT: number = 20; // class level
    coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static maker(coffeeBeans: number) {
      return new CoffeeMachine(coffeeBeans);
    }
    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT)
        throw new Error("No enough coffee beans");

      this.useCoffeeBeans(shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT);

      return {
        shots,
      };
    }

    storeCoffeeBeans(gramm: number) {
      this.coffeeBeans += gramm;
    }

    private useCoffeeBeans(gramm: number) {
      this.coffeeBeans -= gramm;
    }
  }

  const coffeeMachine = new CoffeeMachine(80);
  //   coffeeMachine.storeCoffeeBeans(80);
  const coffee = coffeeMachine.makeCoffee(2);
  console.log(coffeeMachine);
  console.log(coffee);

  const maker = CoffeeMachine.maker(100);
  const coffee2 = maker.makeCoffee(1);
  console.log(maker);
  console.log(coffee2);
}
