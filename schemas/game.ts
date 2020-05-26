import { Schema } from "mongoose";

const repr = {
  _id: {
    type: String,
    trim: true,
    minlength: [2, "A game id must be at least 2 characters"],
    maxlength: [25, "A game id must be at most 25 characters"]
  },
  players: {
    type: [{
      _id: {
        type: Schema.Types.ObjectId,
        ref: "User",
        index: true
      },

      name: String,
      remainingTime: Number,
      score: Number,
      dropped: Boolean,
      faction: String,
    }],
    default: []
  },
  creator: {
    type: Schema.Types.ObjectId,
    index: true
  },
  currentPlayers: [{
    _id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      index: true
    },
    deadline: {
      type: Date,
      index: true
    }
  }],
  lastMove: {
    type: Date,
    index: true
  },
  data: {},
  status: {
    type: String,
    enum: ["open", "active", "ended"],
    default: "open"
  },
  cancelled: {
    type: Boolean,
    default: false
  },
  options: {
    setup: {
      randomPlayerOrder: {
        type: Boolean,
        default: true
      },
      nbPlayers: {
        type: Number,
        default: 2,
      },
      seed: String,
    },
    timing: {
      timePerMove: {
        type: Number,
        default: 15 * 60,
        min: 0,
        max: 24 * 3600
      },
      timePerGame: {
        type: Number,
        default: 15 * 24 * 3600,
        min: 3600,
        max: 15 * 24 * 3600,
        // enum: [1 * 3600, 24 * 3600, 3 * 24 * 3600, 15 * 24 * 3600]
      },
      timer: {
        start: {
          type: Number,
          min: 0,
          max: 24 * 3600 - 1,
        },
        end: {
          type: Number,
          min: 0,
          max: 24 * 3600 - 1,
        },
      }
    },
    meta: {
      unlisted: Boolean,
      minimumKarma: Number
    }
  },

  game: {
    name: String,
    version: Number,
    expansions: [String],

    options: {
    }
  },
};

const schema = new Schema(repr, {timestamps: true});

// To... order open games & active games & closed games
schema.index({status: 1, lastMove: -1});

// To check a player's (dropped) games in the last X days
schema.index({"players._id": 1, lastMove: -1});

export default schema;
