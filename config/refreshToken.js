const jwt = require("jsonwebtoken");
const generateRefreshToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: "3days" })
};
module.exports = { generateRefreshToken };