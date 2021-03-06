import { Schema } from "mongoose";

const repr = {
  _id: {
    game: {
      type: String,
      trim: true,
      required: true,
      minlength: 1
    },
    version: {
      type: Number,
      required: true
    }
  },
  label: {type: String, required: true},
  rules: String,
  description: String,
  viewer: {
    url: {
      type: String,
      required: true
    },
    topLevelVariable: {
      type: String,
      required: true
    },
    dependencies: {
      scripts: [String],
      stylesheets: [String]
    },
    fullScreen: Boolean,
    trusted: Boolean,
    replayable: Boolean,

    alternate: {
      url: {
        type: String,
        required: true
      },
      topLevelVariable: {
        type: String,
        required: true
      },
      dependencies: {
        scripts: [String],
        stylesheets: [String]
      },
      fullScreen: Boolean,
      trusted: Boolean,
      replayable: Boolean,
    }
  },
  engine: {
    package: {
      name: String,
      version: String
    },
    entryPoint: String
  },
  preferences: [{
    _id: false,
    label: {
      type: String,
      trim: true,
      required: true
    },
    type: {
      type: String,
      enum: ["checkbox"],
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }],
  players: [Number],
  options: [{
    _id: false,
    label: {
      type: String,
      trim: true,
      required: true
    },
    type: {
      type: String,
      enum: ["checkbox"],
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }],
  expansions: [{
    _id: false,
    name: String,
    label: String,
  }],
  meta: {
    public: {
      type: Boolean,
      default: false
    },
    needOwnership: {
      type: Boolean,
      default: true
    }
  }
};

const schema = new Schema(repr, {timestamps: true});

export default schema;
