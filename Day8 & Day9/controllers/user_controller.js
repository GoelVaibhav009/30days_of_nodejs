let Users = [];

const getUsers = (req,res)=>{
    res.status(200).send(Users)
}
const postUser = (req, res)=>{
    const user = req.body;
    Users.push(user);
    console.log(`User ${user.name} added to the database`)
    res.status(201).send(`User ${user.name} added to the database`)
}

const findUser = (req,res)=>{
    const user = Users.find((user)=> user.name === req.params.name);
    res.send(user);
    console.log(`User ${req.params.name} has been find`)
    res.status(200).send(`User ${req.params.name} has been find`)
}

const deleteUser = (req, res)=>{
    Users = Users.filter((user)=> user.name !== req.params.name);
    console.log(`User ${req.params.name} deleted from database`)
    res.status(200).send(`User ${req.params.name} deleted from database`)
}

const patchUser=(req, res)=> {
    const user = Users.find((user)=> user.name === req.params.name);
    if(req.body.name) user.name = req.body.name;
    if(req.body.age) user.age = req.body.age;
    if(req.body.school) user.school = req.body.school;
    console.log(`User ${req.params.name} has been updated`)
    res.status(200).send(`User ${req.params.name} has been updated`)
}

module.exports = {
    getUsers,
    postUser,
    patchUser,
    findUser,
    deleteUser
}