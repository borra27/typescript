/**
 * Let's make a game 🕹
 */
let position = { x: 0, y: 0 };
function move(command: Command) {
  switch (command) {
    case "up":
      position = { x: position.x, y: position.y + 1 };
      break;
    case "down":
      position = { x: position.x, y: position.y - 1 };
      break;
    case "left":
      position = { x: position.x - 1, y: position.y };
      break;
    case "right":
      position = { x: position.x + 1, y: position.y };
      break;
    default:
      throw new Error(`unknown direction... ${command}`);
  }
}

console.log(position); // { x: 0, y: 0}
move("up");
console.log(position); // { x: 0, y: 1}
move("down");
console.log(position); // { x: 0, y: 0}
move("left");
console.log(position); // { x: -1, y: 0}
move("right");
console.log(position); // { x: 0, y: 0}

type Command = "up" | "down" | "left" | "right";
type Coord = {
  x: number;
  y: number;
};
