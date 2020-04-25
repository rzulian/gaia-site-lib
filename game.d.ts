export interface IAbstractGame<T= string, Game = any, GameOptions = any> {
  /** Ids of the players in the website */
  players: Array<{_id: T, remainingTime: number}>;
  creator: T;
  currentPlayer: T;

  nextMoveDeadline: Date;

  /** Game data */
  data: Game;

  options: {
    setup: {
      seed: string;
      nbPlayers: number;
      randomPlayerOrder: boolean;
    },
    timing: {
      timePerGame: number;
      timePerMove: number;
      /* UTC-based time of play, by default all day, during which the timer is active, in seconds */
      timer: {
        // eg 3600 = start at 1 am
        start: number;
        // eg 3600*23 = end at 11 pm
        end: number;
      }
    },
    meta: {
      unlisted: boolean;
    }
  };

  game: {
    name: string, // e.g. "gaia-project"
    version: number; // e.g. 1
    expansions: string[], // e.g. ["spaceships"]

    options: GameOptions
  };

  active: boolean;
  open: boolean;

  lastMove: Date;
  updatedAt: Date;
  createdAt: Date;
}

export interface IGame extends IAbstractGame {
  _id: string;
}