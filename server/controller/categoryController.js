const Category = require('../models/Category')

//GET CATEGORY/CATEGORIES
exports.get = async (req, res) => {
    try {
        if (req.query.id) {
            const cat = await Category.findById(req.query.id)
            res.status(200).json(cat)
        } else {
            const cats = await Category.find()
            res.status(200).json(cats)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

//CREATE A CATEGORY
exports.post = async (req, res) => {
    try {
        const newCat = new Category(req.body)
        await newCat.save()
        res.redirect('/add-category')
    } catch (error) {
        res.status(500).json(error)
    }
}

//UPDATE A CATEGORY
exports.put = async (req, res) => {
    try {
        const updatedCat = await Category.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })
        res.redirect('/get-categories', 303);
    } catch (error) {
        res.status(500).json(error)
    }
}

//DELETE A CATEGORY
exports.delete = async (req, res) => {
    try {
        await Category.findByIdAndDelete(req.params.id)
        res.status(200).json("Category deleted!")
    } catch (error) {
        res.status(500).json(error)
    }
}

