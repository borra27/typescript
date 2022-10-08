{
  /**
   * Type Inference
   * 타입 추론에 의지하기 보다는 정확하게 타입을 명시하는게 좋다고 생각함
   */

  let text = "hello"; // 자동으로 타입이 string 으로 명시됨
  text = 1;

  // 함수의 인자에 따로 타입을 지정하지 않으면 또는 기본 값을 정의하지 않으면 any 가 지정됨
  function print(message = "hello") {
    console.log(message);
  }
  print("apple");
  print(1);

  // 리턴 값이 number 로 자동 명시됨
  function add(x: number, y: number) {
    return x + y;
  }
  const result = add(1, 2); // result 는 number 로 자동 명시됨
}
