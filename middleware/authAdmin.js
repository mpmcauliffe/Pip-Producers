const jwt           = require('jsonwebtoken')
const config        = require('config')
const jwtDecode     = require('jwt-decode')


module.exports = function(req, res, next) {
    // get token
    const token = req.header('x-auth-token')
    // check if not token
    if (!token) { return res.status(401).json({ msg: 'No token, authorization denied.' }) }


    try {
        const decoded = jwtDecode(token) 

        if(decoded.user.role === 'admin') {
            req.user = decoded.user
            next()
        } else {
            return res.status(401).send('Insufficient role')
        }
    } catch (err) {
        res.status(401).json({ msg: 'Token not valid' })
    }
}