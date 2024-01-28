const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization.replace('Bearer ', '');;

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized - Token not provided' });
    }

    jwt.verify(token, process.env.JWT_SECRET, { algorithms: ['HS256'] }, (err, decoded) => {
        if (err) {
            console.error('Verification Error:', err.message);
            return res.status(401).json({ error: 'Unauthorized - Invalid token' });
        }

        req.user = decoded;
        next();
    });

};

module.exports = verifyToken;
