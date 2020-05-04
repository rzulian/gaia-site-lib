import { Schema } from "mongoose";

const repr = {
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  game: {
    type: String,
    ref: "Game"
  },
  kind: {
    type: String,
    enum: ["currentMove", "gameEnded", "gameStarted"]
  }
};

const schema = new Schema(repr, {timestamps: true});

export default schema;
