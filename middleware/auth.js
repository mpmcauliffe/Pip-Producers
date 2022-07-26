const jwt           = require('jsonwebtoken')
const config        = require('config')

const secret        = process.env.JWT_SECRET || config.get('JWT_SECRET')

module.exports = function(req, res, next) {
    // get token
    const token = req.header('x-auth-token')
    // check if not token
    if (!token) { return res.status(401).json({ msg: 'No token, authorization denied.' }) }


    try {
        const decoded = jwt.verify(token, secret)

        req.user = decoded.user
        next()
    } catch (err) {
        res.status(401).json({ msg: 'Token not valid' })
    }
}
