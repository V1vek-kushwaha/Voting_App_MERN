const mongoose = require("mongoose");

//define candidate schema
const candidateSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  party: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require,
  },
  votes: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true,
      },
      votedAt: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
  voteCount: {
    type: Number,
    default: 0,
  },
});

const Candidate = mongoose.model("Candidate", candidateSchema);
module.exports = Candidate;
