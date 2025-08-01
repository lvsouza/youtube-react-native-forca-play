import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Crypto from 'expo-crypto';


export interface IMatchHistory {
  id: string,
  mode: 'classic',
  status: 'ongoing' | 'lose' | 'win' | 'draw',
  numberOfRounds: number,
}

export const StorageMatchHistory = {
  async getAll(): Promise<IMatchHistory[]> {
    const matches = await AsyncStorage
      .getItem('MatchHistory')
      .then((matchesAsString) => {
        if (!matchesAsString) return [];

        const matches = JSON.parse(matchesAsString);
        return matches;
      });

    return matches;
  },
  async create(match: Omit<IMatchHistory, 'id'>): Promise<string> {
    const matchToInsert = { ...match, id: Crypto.randomUUID() };

    const matches = await StorageMatchHistory.getAll();

    const matchesOngoing = matches.filter(match => match.status === 'ongoing');
    if (matchesOngoing.length > 0) {
      throw new Error("Match ongoing limit archived");
    }


    matches.unshift(matchToInsert);

    const matchesAsString = JSON.stringify(matches);

    await AsyncStorage.setItem('MatchHistory', matchesAsString);

    return matchToInsert.id;
  },
  async update(matchToInsert: IMatchHistory) {
    let matches = await StorageMatchHistory.getAll();

    matches = matches.map(match => {
      if (match.id === matchToInsert.id) return matchToInsert;
      return match;
    });

    const matchesAsString = JSON.stringify(matches);

    await AsyncStorage.setItem('MatchHistory', matchesAsString);
  },
};
