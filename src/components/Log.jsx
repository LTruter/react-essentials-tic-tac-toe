function Log({ turns, playerNames }) {
  return (
    <ol id="log">
      {turns.map(({ square, player }) => (
        <li key={`${square.row}${square.col}`}>
          {playerNames[player]} selected Row: {square.row + 1}, Column:{" "}
          {square.col + 1}
        </li>
      ))}
    </ol>
  );
}

export default Log;
