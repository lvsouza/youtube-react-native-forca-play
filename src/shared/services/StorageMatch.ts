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

export interface IMatch {
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
      maskedWord: wordToGuess.word.split('').map((letter) => letter === '-' ? '-' : '_'),
    };

    match.rounds.push(newRound);
    match.currentRound = match.rounds.length;


    await StorageMatch.update(match);

    await StorageGuessedWords.addWord(wordToGuess.word);

    return newRound;
  },
  async guessALetterByMatchId(matchId: string, letter: string) {
    const match = await StorageMatch.getById(matchId);
    if (!match) return 'match-not-found' as const;
    if (match.status !== 'ongoing') return 'match-ended' as const;

    const currentRound = match.rounds.find(round => round.round === match.currentRound);
    if (!currentRound) return 'round-not-found' as const;

    if (currentRound.status !== 'playing') return 'round-ended' as const;

    if (currentRound.endTime < Date.now()) {
      currentRound.status = 'lose';
      await StorageMatch.update(match);
      return 'round-time-expired' as const;
    }


    const normalizedSecretWord = currentRound
      .secretWord
      .split('')
      .map(letter => letter
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/æ/g, 'ae')
        .replace(/œ/g, 'oe')
        .replace(/ß/g, 'ss')
        .replace(/ø/g, 'o')
        .replace(/ł/g, 'l')
      );

    const isCorrectGuess = normalizedSecretWord.includes(letter);
    if (!isCorrectGuess) {
      currentRound.wrongGuesses.push(letter);
    } else {
      currentRound.correctGuesses.push(letter);

      const originalSecretWordAsArray = currentRound.secretWord.split('');

      currentRound.maskedWord = normalizedSecretWord.map((normalizedLetter, index) => {
        if (currentRound.correctGuesses.includes(normalizedLetter)) return originalSecretWordAsArray[index];
        return normalizedLetter === '-' ? '-' : '_';
      });
    }

    if (currentRound.wrongGuesses.length >= 7) {
      currentRound.status = 'lose';
      await StorageMatch.update(match);
      return 'round-ended' as const;
    } else if (!currentRound.maskedWord.includes('_')) {
      currentRound.status = 'win';
      await StorageMatch.update(match);
      return 'round-ended' as const;
    } else {
      await StorageMatch.update(match);
      return currentRound;
    }
  },
};
