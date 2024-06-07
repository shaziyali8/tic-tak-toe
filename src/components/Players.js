import { useState } from "react";

export default function Player({ initialName, symbol, isActive, updateName}) {
  const [playerName, setplayerName] = useState(initialName);
  const [isEditable, setisEditable] = useState(false);

  function handleChange(event) {
    setplayerName(event.target.value);
    }
    function handleEdit() {
      setisEditable((editable) => !editable);
      if(isEditable){
        updateName(symbol, playerName)
      }
      
  }

  let editablePlayerName = <span>{playerName}</span>;
  if (isEditable) {
    editablePlayerName = (
      <input required value={playerName} onChange={handleChange} />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <b><span>{symbol}</span></b>
      <span>{editablePlayerName}</span>
      <span onClick={handleEdit}>{isEditable ? "✅" : "✏️"}</span>
    </li>
  );
}
