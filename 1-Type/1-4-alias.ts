{
  /**
   * Type Aliases
   */
  type Text = string;
  const name: Text = "ryle";

  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: "ellie",
    age: 14,
  };

  /**
   * String Literal Types
   */
  type Name = "name";
  let ellieName: Name = "name";

  type Boal = true;
  const isCat: Boal = true;
}
