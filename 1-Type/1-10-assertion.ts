{
  /**
   * Type Assertions
   * 타입을 강제로 명시하는 것
   * 코드를 작성할 때는 문제가 없지만 실행할 때 문제가 생길 수 있음
   * 권장하지 않음
   */

  function jsStrFunc(): any {
    // return "hello";
    return 2;
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 크래시ㅠㅠ

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const number = findNumbers()!; // !: option 이 아니고 절대적으로 값이 있음
  number!.push(2);
  const button = document.querySelector("class")!;
}
