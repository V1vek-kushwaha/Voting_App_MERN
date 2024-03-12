const jwt = require("jsonwebtoken");

const jwtAuthMiddleWare = (req, res, next) => {
  //first check request headers has authorization or not
  const authorization = req.headers.authorization;

  if (!authorization) {
    return res.status(401).json({ error: "token not found" });
  }
  // Extract the jwt token from the request header
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  try {
    //verify the jwt token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    console.log("error in jwtmiddleware", err);
    res.status(401).json({ error: "invalid token" });
  }
};

//fuction to generate JWT token
const generateToken = (userData) => {
  //generate a new user JWT token using user Id
  return jwt.sign(userData, process.env.JWT_SECRET, { expiresIn: 3000000 });
};

module.exports = { generateToken, jwtAuthMiddleWare };
