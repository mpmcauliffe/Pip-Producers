const express       = require('express')
const router        = express.Router()
const User          = require('../../models/Users')
const authAdmin      = require('../../middleware/authAdmin')


// @route GET api/admin
// @desc  Get ALL users
// @access Public
router.get('/', authAdmin, async (req, res) => {

    try {
        const users = await User.find().select('-password').sort({ name: 1 })
        res.json(users)    
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server error')
    }
})

// @route       PUT api/admin
// @desc        Update contact
// @access      Private
router.put('/', authAdmin, async (req, res) => {

    try {
        req.body.forEach(user => {
            console.log(user)
            User.findByIdAndUpdate(
                user._id,
                { role: user.role },
                { new: true }
            ).then(data => {
                
            })  
        })
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})


module.exports = router
