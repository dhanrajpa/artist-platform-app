
const imageController = require('../controllers/postImgController')
const multer = require('multer')
const path = require('path')
const router = require('express').Router()

const storage = multer.diskStorage({
    destination: '../../public/DBimage/',
    filename: (req, file, cb) => {

        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage
})

router.post('/addImage', upload.single('postimage'), imageController.addpostImage);

router.get('/getImage', imageController.getProfileImage);






module.exports = router
