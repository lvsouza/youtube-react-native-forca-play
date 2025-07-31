import AsyncStorage from '@react-native-async-storage/async-storage';


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
  wordDifficulty: 'normal' | 'easy' | 'hard';
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
};
