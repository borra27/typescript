{
  /**
   * Intersection Types: AND &
   */
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    id: number;
    work: () => void;
  };

  function internWork(intern: Student & Worker) {
    console.log(intern.name, intern.id, intern.work());
  }
  internWork({
    name: "bora",
    score: 99,
    id: 123,
    work: () => {},
  });
}
