const express = require("express");
const router = express.Router();
const Candidate = require("../models/Candidate");
const { generateToken, jwtAuthMiddleWare } = require("../auth/jwt");
const User = require("../models/User");

//verify user type (should be admin)
const checkAdminRole = async (userId) => {
  try {
    const user = await User.findById(userId);
    return user.role === "admin";
  } catch (err) {
    return false;
  }
};

router.post("/", async (req, res) => {
  try {
    if (!(await checkAdminRole(req.user.id)))
      return res.status(403).json({ message: "user does not have admin role" });

    const data = req.body; //assuming the request body contains the data

    //create a new candidate document using the mongoose model
    const newCandidate = new Candidate(data);

    //save the candidate to the database
    const response = await newCandidate.save();
    console.log("data saved");
    res.status(200).json({ response: response });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
});
router.put("/:candidateId", async (req, res) => {
  try {
    if (!(await checkAdminRole(req.user.id)))
      return res.status(403).json({ message: "user does not have admin role" });

    const candidateId = req.user.candidateId; //extract id from the token
    const updatedCandidateData = req.body;
    //find the user by userId
    const response = await Candidate.findByIdAndUpdate(
      candidateId,
      updatedCandidateData,
      {
        new: true, // return the updated document
        runValidators: true, //run mongoose validation
      }
    );
    if (!response) {
      return res.status(404).json({ error: "candidate not found" });
    }
    console.log("data updated");
    res.status(200).json({ message: "candidate data updated" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
});
router.delete("/candidates/:candidateId", async (req, res) => {
  try {
    if (!(await checkAdminRole(req.user.id)))
      return res.status(403).json({ message: "user does not have admin role" });

    const candidateId = req.user.candidateId; //extract id from the token
    //find the user by userId
    const response = await Candidate.findByIdAndDelete(candidateId);
    if (!response) {
      return res.status(404).json({ error: "candidate not found" });
    }
    res.status(200).json({ message: "candidate data deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
});

//let's start voting

router.post("/vote/:cadidateID", jwtAuthMiddleWare, async (req, res) => {
  //no admin can vote
  //user can vote only one time
  candidateId = req.params.cadidateID;
  userId = req.user.id;
  try {
    const candidate = await Candidate.findById(candidateId);

    if (!candidate) {
      return res.status(404).json({ message: "candidate not found" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    if (user.isVoted) {
      return res.status(404).json({ message: "you have already voted" });
    }
    if (user.role == "admin") {
      return res.status(404).json({ message: "admin not allowed" });
    }
    candidate.votes.push({ user: userId });
    candidate.voteCount++;
    await candidate.save();

    //update the user document
    user.isVoted = true;
    await user.save();
    res.status(200).json({ message: "VOTE recorded successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "internal server error" });
  }
});

//vote count
router.get("/vote/count", async (req, res) => {
  try {
    const candidateVotes = await Candidate.find().sort({ voteCount: "desc" });
    const voteRecord = candidateVotes.map((data) => {
      return {
        party: data.party,
        count: data.voteCount,
      };
    });
    return res.status(200).json(voteRecord);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});

//list of candidates
router.get("/allcandidate", async (req, res) => {
  try {
    const allcandidate = await Candidate.find();
    res.status(200).json({ allcandidate });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});
module.exports = router;
