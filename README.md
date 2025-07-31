
Modelagem do async storage

```JS
[
  // MatchHistory - Lista de todas as partidas
  {
    id: 'asdasdasdfasfasdf',
    mode: 'classic',
    status: 'ongoing', // 'ongoing' | 'lose' | 'win' | 'draw',
    numberOfRounds: 3,
  },

  // GuessedWords
  "abacate,jogo,hospital,..." // String simples

  //Match:GameId
  {
    id: 'asdasdasdfasfasdf',
    mode: 'classic',
    currentRound: 1,
    status: 'ongoing', // 'ongoing' | 'lose' | 'win' | 'draw',
    numberOfRounds: 3,
    timeForEachRound: 3,
    wordDifficulty: 'normal', // 'normal' | 'easy' | 'hard',
    rounds: [
      {
        round: 1,
        status: 'playing', // 'playing' | 'win' | 'lose' | 'setup'
        endTime: 1751756466110,
        startTime: 1751756286110,
        tip: 'Algo para se divertir',
        wrongGuesses: ['a', 'e', 'i'],
        correctGuesses: ['o', 'j', 'g'],
        maskedWord: ['_', '_', '_', '_'],
        secretWord: 'jogo',
      }
    ]
  },
]
```