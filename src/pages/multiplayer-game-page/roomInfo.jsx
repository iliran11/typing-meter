import React from "react";

export default function RoomInfo(props) {
  const players = Object.values(props.players);

  return (
    <div>
      <h1>roomID: {props.gameId}</h1>
      <div id="scores">
        {players.map(player => {
          const score =
            Math.round(player.score) < 0 ? 0 : Math.round(player.score);
          return (
            <p>
              <span>
                <b>Player:</b> {player.name}
              </span>
              <span>
                <b>Score:</b> {score}
              </span>
            </p>
          );
        })}
      </div>
    </div>
  );
}
