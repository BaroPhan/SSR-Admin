const User = require('../models/User')
const CryptoJS = require('crypto-js')
// const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');

//GET USER/USERS
exports.get = async (req, res) => {
    try {
        if (req.query.id) {
            const user = await User.findById(req.query.id)
            const { password, ...others } = user._doc
            res.status(200).json(others)
        } else {
            const users = await User.find()
            res.status(200).json(users)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

//CREATE A USER
exports.post = async (req, res) => {
    try {
        const isAdmin = req.body.isAdmin ? true : false
        const newUser = new User({ ...req.body, isAdmin: isAdmin, password: CryptoJS.AES.encrypt(req.body.password, process.env.PWRD_SEC_KEY).toString() })
        const user = await User.find({ $or: [{ username: req.body.username }, { email: req.body.email }] })
        if (user.length > 0) {
            res.status(400).json("User already existed!")
        } else {
            await newUser.save()
            res.redirect('/add-user')
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

//UPDATE A USER
exports.put = async (req, res) => {
    if (req.body.password)
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PWRD_SEC_KEY).toString()
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })
        res.redirect('/get-user', 303);
    } catch (error) {
        res.status(500).json(error)
    }
}

//DELETE A USER
exports.delete = async (req, res) => {
    try {
        console.log('delete')
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User deleted!")
    } catch (error) {
        res.status(500).json(error)
    }
}

