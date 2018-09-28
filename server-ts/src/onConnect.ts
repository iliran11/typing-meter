import sharedCode from "../../client-server-code/client-server-code.js";
const {
  constants: {
    DECREMENT_INDEX,
    PLAYER_TYPING,
    BROADCAST_NAME,
    SCORES_BROADCAST
  },
  updateWordNextStatus,
  wpmScore
} = sharedCode;
import Player from "./classes/Player";

const player = new Player("hello");

function onConnect() {
  const liran = sharedCode;
  const a = 2;
}

export { onConnect };
