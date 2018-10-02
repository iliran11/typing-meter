import React from "react";

export default function RoomInfo(props) {
  const players = Object.values(props.players);
  return (
    <div>
      <h1>roomID: {props.gameId}</h1>
      <div id="scores">
        {players.map(player => {
          return (
            <p>
              <span><b>Player:</b> {player.name}</span>
              <span><b>Score:</b> {Math.round(player.score)}</span>
            </p>
          );
        })}
      </div>
    </div>
  );
}
