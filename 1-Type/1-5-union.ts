{
  /**
   * Union TYpes: OR
   */
  type Direction = "left" | "right" | "up" | "donw";
  function move(direction: Direction) {
    console.log(direction);
  }
  move("right");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 19; // X

  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function login(id: string): Promise<LoginState> {
    if (id === "user")
      return Promise.resolve({
        response: {
          body: "logged in!",
        },
      });
    else
      return Promise.reject({
        reason: "*-*",
      });
  }

  function printLoginState(state: LoginState) {
    // 추천하지 않음
    if ("response" in state) {
      console.log(state.response.body);
    } else {
      console.log(state.reason);
    }
  }
}
