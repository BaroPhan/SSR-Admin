const axios = require('axios');

exports.addCategory = (req, res) => {
    res.render('pages/Categories/addCategory');
}

exports.getCategories = async (req, res) => {
    try {
        const cats = await axios.get('http://localhost:3000/api/categories',
            {
                headers: {
                    'Authorization': 'Bearer ' + req.cookies.jwt
                }
            })
        res.render('pages/Categories/categories', { cats: cats.data })
    } catch (error) {
        res.send(error)
    }
}

exports.updateCategory = async (req, res) => {
    try {
        const cat = await axios.get(`http://localhost:3000/api/categories?id=${req.query.id}`,
            {
                headers: {
                    'Authorization': 'Bearer ' + req.cookies.jwt
                }
            })
        res.render('pages/Categories/updateCategory', { cat: cat.data })
    } catch (error) {
        res.send(error)
    }
}