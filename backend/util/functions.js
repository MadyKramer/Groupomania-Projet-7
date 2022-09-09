const database = require("../util/database");
const env = require("dotenv").config();
const jwt = require("jsonwebtoken");


exports.getUserId = (req) => {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.jwt);
    const userId = decodedToken.userId;
    return userId;
}

exports.formatDate = () => {
    const fullDate = new Date();
    const year = fullDate.getFullYear();
    const month = fullDate.getMonth() + 1;
    const days = fullDate.getDate();
    const hours = fullDate.getHours();
    const minutes = fullDate.getMinutes();
    const seconds = fullDate.getSeconds();
    return `${year},${month},${days} ${hours}:${minutes}:${seconds}`
}

exports.hasRight = (req) => {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.jwt);
    const hasRight = decodedToken.perm;
    return hasRight;
}