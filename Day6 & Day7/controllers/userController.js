const users = [];

const getAddPage = (req, res) => {
    res.render('index', {pageTitle: 'Add User', styleCss: true});
}
const getUsers = (req,res) => {
    res.render('users', {pageTitle: 'Users', user: users, userlength: users.length});
}
const postAddUser = (req,res) => {
    console.log(req.body.username);
    users.push({name: req.body.username});
    res.redirect('/users');
}
module.exports = {getAddPage, getUsers, postAddUser}