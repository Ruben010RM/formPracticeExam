import { useEffect, useState } from "react";
import { movies } from "../data/movies";
import textNormalizer from "../utils/textNormalizer";

const INITIAL_GAME_STATE = {
  gameFilms: [],
  indexActualFilm: 0,
  points: 0,
  state: "playing",
  showFeedback: false,
  isCorrect: false,
};

export default function useEmojiGuess() {
  //Manejo la logica desde un objeto entero asi no necesito tantos useState,
  //Tendre problema por el batchiing de actualizaciones si necesito actualizar
  //Varios campos a la vez
  const [game, setGame] = useState(INITIAL_GAME_STATE);

  //Mezclamos la lista de peliculas, seleccionamos 5 con un slice y actualizamos gameFilms
  function selectRandomMovie() {
    const shuffledMovies = [...movies].sort(() => Math.random() - 0.5);
    const selectedMovies = shuffledMovies.slice(0, 5);
    setGame((prev) => ({ ...prev, gameFilms: selectedMovies }));
  }

  //Cuando se monta el componente se eligen peliculas
  useEffect(() => {
    selectRandomMovie();
  }, []);

  //Dado un texto , seleccionamos pelicula actual, validamos input y seteamos
  //las propiedades correspondientes
  function handleAnswer(userAnswer) {
    const actualFilm = game.gameFilms[game.indexActualFilm];
    const isAnswerCorrect = actualFilm.regex.test(textNormalizer(userAnswer));
    setGame((prev) => ({
      ...prev,
      isCorrect: isAnswerCorrect,
      showFeedback: true,
      points: isAnswerCorrect ? prev.points + 1 : prev.points,
    }));
    //Si la respuesta es correcta avanzamos automaticamente
    if (isAnswerCorrect) {
      setTimeout(() => {
        moveToNext();
      }, 1500);
    }
  }

  //Antes de avanzar vemos si ya estamos en la ultima pelicula,
  //Si es asi reiniciamos indice a 0 y seteamos el estado a finshed
  //Si no, avanzamos y mantenemos estado playing
  function moveToNext() {
    setGame((prev) => ({
      ...prev,
      isCorrect: false,
      showFeedback: false,
      indexActualFilm:
        prev.indexActualFilm === prev.gameFilms.length - 1
          ? 0
          : prev.indexActualFilm + 1,
      state:
        prev.indexActualFilm === prev.gameFilms.length - 1
          ? "finished"
          : "playing",
    }));
  }

  //Seteamos a opciones por defecto y seleccionamos nuevas peliculas
  function playAgain() {
    setGame(INITIAL_GAME_STATE);
    selectRandomMovie();
  }

  return { game, handleAnswer, moveToNext, playAgain };
}
