export default function GameOver({ score, totalQuestions, resetGame }) {
  return (
    <div>
      <h1>{score === totalQuestions ? "GANASTE" : "PERDISTE"}</h1>
      <h1>{score + "/" + totalQuestions}</h1>
      <button onClick={resetGame}>Restart</button>
    </div>
  );
}
