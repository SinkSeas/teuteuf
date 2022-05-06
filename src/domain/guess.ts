import { TWITCH_PLAYS_WORLDLE } from "../App";
import { Direction } from "./geography";

export interface Guess {
  name: string;
  distance: number;
  direction: Direction;
}

export function loadAllGuesses(): Record<string, Guess[]> {
  if (TWITCH_PLAYS_WORLDLE) {
    return {};
  }

  const storedGuesses = localStorage.getItem("guesses");
  return storedGuesses != null ? JSON.parse(storedGuesses) : {};
}

export function saveGuesses(dayString: string, guesses: Guess[]): void {
  if (TWITCH_PLAYS_WORLDLE) {
    return;
  }

  const allGuesses = loadAllGuesses();
  localStorage.setItem(
    "guesses",
    JSON.stringify({
      ...allGuesses,
      [dayString]: guesses,
    })
  );
}
