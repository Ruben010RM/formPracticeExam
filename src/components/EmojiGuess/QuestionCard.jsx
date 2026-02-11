import { useState } from "react";
import { movies } from "../../data/movies";
const movieSuggestions = movies.map((movie) => movie.title);
export default function QuestionCard({
  movie,
  onAnswer,
  showFeedback,
  isCorrect,
  nextQuestion,
}) {
  const [userInput, setUserInput] = useState("");

  function handleInput(e) {
    setUserInput(e.currentTarget.value);
  }
  function handleAnswer() {
    onAnswer(userInput);
    setUserInput("");
  }

  return (
    <div className="question-card">
      <h1 className="emojis">{movie.emojis}</h1>
      {!showFeedback ? (
        <form>
          <input
            type="text"
            value={userInput}
            onChange={handleInput}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleAnswer(e.target.value);
              }
            }}
            list="movieSuggestions"
          />
          <datalist id="movieSuggestions">
            {movieSuggestions.map((title, index) => (
              <option key={index} value={title}></option>
            ))}
          </datalist>
          <button type="button" onClick={handleAnswer}>
            Confirm
          </button>
        </form>
      ) : (
        <div className="feedback">
          {isCorrect ? (
            <div>Respuesta correcta</div>
          ) : (
            <div>
              Respuesta incorrecta
              <button onClick={nextQuestion}>Siguiente</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
