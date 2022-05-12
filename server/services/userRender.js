const axios = require('axios');

exports.addUser = (req, res) => {
    res.render('pages/Users/addUser');
}

exports.getUsers = async (req, res) => {
    console.log(req.cookies.jwt)
    try {
        const users = await axios.get('http://localhost:3000/api/users',
            {
                headers: {
                    'Authorization': 'Bearer ' + req.cookies.jwt
                }
            })
        res.render('pages/Users/users', { users: users.data })
    } catch (error) {
        res.send(error)
    }
}

exports.updateUser = async (req, res) => {
    try {
        const user = await axios.get(`http://localhost:3000/api/users?id=${req.query.id}`,
            {
                headers: {
                    'Authorization': 'Bearer ' + req.cookies.jwt
                }
            })
        res.render('pages/Users/updateUser', { user: user.data })
    } catch (error) {
        res.send(error)
    }
}