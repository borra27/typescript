{
  // Array
  const fruits: string[] = ["apple", "banana"];
  const scores: Array<number> = [1, 3, 4];
  // readonly 를 사용할 때는 string[]은 쓸 수 있지만, Array<string>은 쓸 수 없다
  function printArray(fruits: readonly string[]) {
    console.log(fruits);
    fruits.push("berry");
  }

  // Tuple
  // 서로 다른 타입의 배열을 만들 수 있음
  // 일반적인 경우에는 interface, type alias, class 로 대체해서 사용하는 것이 좋음
  // 예제: useState()  동적으로 다른 타입을 묶어서 사용자가 이름을 정의해서 쓸 경우
  let students: [string, number];
  students = ["name", 23];
  students[0]; // name <== 가독성이 좋지 x
  students[1]; // 23
  const [name, age] = students; // 조금 더 가독성이 좋아지긴 함...
}
