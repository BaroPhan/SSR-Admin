const User = require('../models/User')
const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')
// const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');

//GET USER/USERS
exports.login = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username })
        !user && res.status(401).json("there is no username like that!")

        const decryptedPWRD = CryptoJS.AES.decrypt(user.password, process.env.PWRD_SEC_KEY).toString(CryptoJS.enc.Utf8)
        decryptedPWRD !== req.body.password && res.status(401).json("incorrect password")

        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin
        }, process.env.JWT_SEC_KEY, { expiresIn: "1d" })

        const { password, ...others } = user._doc
        res.cookie('jwt', accessToken)
        res.status(200).json(others)
        res.redirect('/')
    } catch (error) {
        console.log(error)
    }
}