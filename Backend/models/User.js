const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

//define user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  email: {
    type: String,
  },
  mobile: {
    type: Number,
  },
  address: {
    type: String,
  },
  aadhaarCardNumber: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    enum: ["voter", "admin"],
    default: "voter",
  },
  isVoted: {
    type: Boolean,
    default: false,
  },
});

userSchema.pre("save", async function (next) {
  const user = this;
  //hash the password only if it has been modified (or is new)
  if (!user.isModified("password")) return next();

  try {
    //hash password generation
    const salt = await bcrypt.genSalt(10);
    //hash passworrd
    const hashedPassword = await bcrypt.hash(user.password, salt);
    // override the plain password with the hashed one
    user.password = hashedPassword;
    next();
  } catch (err) {
    return next(err);
  }
});
userSchema.methods.comparePassword = async function (condidatePassword) {
  try {
    //  use bcrypt to compair the provided password with the hashed password
    const isMatch = await bcrypt.compare(condidatePassword, this.password);
    return isMatch;
  } catch (err) {
    throw err;
  }
};

const User = mongoose.model("user", userSchema);
module.exports = User;
