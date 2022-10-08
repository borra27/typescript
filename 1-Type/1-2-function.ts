{
  // Javascript
  function jsAdd(num1, num2) {
    return num1 + num2;
  }
  // Typescript
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // Javascript
  function jsFetchNum(id) {
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }
  // Typescript
  function fetchNum(id: string): Promise<number> {
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // -------

  // Optional parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName("Steve", "Jobs");
  printName("Ellie");

  // Default parameter
  function printMessage(message: string = "default msg") {
    console.log(message);
  }
  printMessage();

  // Rest parameter
  function addNumber(...rest: number[]) {
    return rest.reduce((a, b) => a + b);
  }
  console.log(addNumber(1, 2));
  console.log(addNumber(1, 2, 3));
}
