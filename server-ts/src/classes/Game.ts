import * as sharedCode from "../../../client-server-code/client-server-code.js";

export default class Game {
  gameObject: object;
  constructor(gameId: number, words: string[]) {
    this.gameObject = sharedCode.default.createGame(gameId,words);
  }
}
