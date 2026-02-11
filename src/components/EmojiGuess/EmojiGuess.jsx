import GameOver from "./GameOver";
import QuestionCard from "./QuestionCard";
import useEmojiGuess from "../../hooks/useEmojiGuess.js";

export default function EmojiGuess() {
  const { game, handleAnswer, moveToNext, playAgain } = useEmojiGuess();
  if (game.gameFilms.length <= 0)
    return (
      <div>
        <p>Cargando...</p>
      </div>
    );

  if (game.state === "finished")
    return (
      <>
        <GameOver
          score={game.points}
          totalQuestions={game.gameFilms.length}
          resetGame={playAgain}
        />
      </>
    );

  return (
    <div className="emoji-guess">
      <h2>Guess the Film</h2>
      <h1>{game.indexActualFilm + "/" + game.gameFilms.length}</h1>
      <QuestionCard
        movie={game.gameFilms[game.indexActualFilm]}
        onAnswer={handleAnswer}
        showFeedback={game.showFeedback}
        isCorrect={game.isCorrect}
        nextQuestion={moveToNext}
      />
    </div>
  );
}
