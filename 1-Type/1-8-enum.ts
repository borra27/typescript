{
  /**
   * Enum
   */

  // Javascript
  // enum 이 없음
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;

  const MONDAY = 0;
  const TUESDAY = 1;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // Typescript
  // Enum 은 가능한 한 쓰지 않는 것이 좋음. 타입이 정확하게 보장되지 않음
  // Union Type 을 대신 쓸 수 있음
  type DaysOf = "Monday" | "Tuesday" | "Wednesday";
  enum Days {
    Monday, // 0
    Tuesday = 2, // 2
    Wednesday, // 3
  }
  let day: Days = Days.Wednesday;
  day = Days.Monday;
  day = 10; // 경고 메세지가 없음

  let dayOf: DaysOf = "Monday";
  dayOf = "Satarday"; // 경고 메세지가 있음
}
