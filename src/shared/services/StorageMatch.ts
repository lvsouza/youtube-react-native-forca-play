import AsyncStorage from '@react-native-async-storage/async-storage';
import { addMinutes } from 'date-fns';

import { StorageGuessedWords } from './StorageGuessedWords';
import { GetNewWordToGuess } from './GetNewWordToGuess';


interface IRound {
  tip: string;
  round: number;
  endTime: number;
  startTime: number;
  secretWord: string;
  maskedWord: string[];
  wrongGuesses: string[];
  correctGuesses: string[];
  status: 'playing' | 'win' | 'lose' | 'setup';
}

interface IMatch {
  id: string;
  mode: 'classic';
  rounds: IRound[];
  currentRound: number;
  numberOfRounds: number;
  timeForEachRound: number;
  wordDifficulty: 'medium' | 'easy' | 'hard';
  status: 'ongoing' | 'lose' | 'win' | 'draw';
}

export const StorageMatch = {
  async getById(id: string): Promise<IMatch | null> {
    const match = await AsyncStorage
      .getItem(`Match:${id}`)
      .then((matchAsString) => {
        if (!matchAsString) return null;

        const match = JSON.parse(matchAsString);
        return match;
      });

    return match;
  },
  async create(match: IMatch) {
    const matchAsString = JSON.stringify(match);
    await AsyncStorage.setItem(`Match:${match.id}`, matchAsString);
  },
  async update(matchToUpdate: IMatch) {
    let match = await StorageMatch.getById(matchToUpdate.id);
    if (!match) return;

    const matchAsString = JSON.stringify(matchToUpdate);

    await AsyncStorage.setItem(`Match:${matchToUpdate.id}`, matchAsString);
  },

  async addRoundByMatchId(id: string): Promise<IRound> {
    const match = await StorageMatch.getById(id);
    if (!match) throw new Error('Match not found');

    let wordToGuess = await GetNewWordToGuess.getWord(match.wordDifficulty);
    if (wordToGuess instanceof Error) {
      await StorageGuessedWords.update('');
      wordToGuess = await GetNewWordToGuess.getWord(match.wordDifficulty);
      if (wordToGuess instanceof Error) {
        throw wordToGuess;
      }
    }

    const startTime = Date.now();
    const endTime = addMinutes(startTime, match.timeForEachRound).getTime();

    const newRound: IRound = {
      endTime,
      startTime,
      wrongGuesses: [],
      status: 'playing',
      correctGuesses: [],
      tip: wordToGuess.tip,
      secretWord: wordToGuess.word,
      round: match.rounds.length || 1,
      maskedWord: wordToGuess.word.split('').map(() => '_'),
    };

    match.rounds.push(newRound);
    match.currentRound = match.rounds.length;


    await StorageMatch.update(match);

    return newRound;
  },
};
