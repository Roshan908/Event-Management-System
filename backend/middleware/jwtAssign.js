const jwt = require('jsonwebtoken');
require('dotenv').config(); // Load environment variables

const secretKey = process.env.JWT_SECRET;

module.exports.generateJWT = (payload) => {
    if (!secretKey) {
        throw new Error("JWT secret key is missing!");
    }
    return jwt.sign(payload, secretKey, { expiresIn: "1h" });
};
