
const express           = require('express')
const fileUpload        = require('express-fileupload')
const router            = express.Router()
const authContributor   = require('../../middleware/authContributor')



router.use(fileUpload())

router.post('/', authContributor, (req, res) => {
    
    console.log(__dirname)
    if(req.file === null) {
        return res.status(400).json({ msg: 'Error: No file uploaded' })
    }

    //console.log(req.files)
    const file = req.files.file
    
    /* FOR DEVELOPMENT USAGE */
    // ${__dirname}/../../client/public/uploads/${file.name}

    /* FOR PRODUCTION USAGE */
    file.mv(`${__dirname}/../../client/build/uploads/${file.name}`, err => {
        if(err) {
            console.error(err)
            return res.status(500).send(err)
        }
    })
    res.json({ fileName: file.name, filePath: `/uploads/${file.name}`})
})


module.exports = router

// for development
//``

