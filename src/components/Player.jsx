import { useState } from "react";

function Player({ initialName, symbol, isActive, onPlayerNameChange }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((isEditing) => !isEditing);

    isEditing && onPlayerNameChange(symbol, playerName);
  }

  function handleChange(event) {
    console.log(event.target);
    setPlayerName(event.target.value);
  }

  const editPlayerName = isEditing ? (
    <input
      required
      type="text"
      value={playerName}
      onChange={handleChange}
      autoFocus
    />
  ) : (
    <span className="player-name">{playerName}</span>
  );

  const btnCaption = isEditing ? "Save" : "Edit";

  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {editPlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}

export default Player;
