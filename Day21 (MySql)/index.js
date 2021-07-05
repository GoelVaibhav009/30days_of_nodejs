const express = require('express')
const mysql = require('mysql2')

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "welcome@123",
    port: "3306",
    database: "nodemysql"
})

db.connect((err) => {
    if(err) throw err;
    console.log("MySql connected")
});

// Create DB
app.get('/createDB', (req, res)=>{
    const sql = "CREATE DATABASE nodemysql";
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("Database Created");
    })
})

// Create Table
app.get('/createTb', (req, res)=>{
    const sql = "CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))";
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("Table Created");
    })
})

// Insert Post 1
app.get('/add1', (req, res)=>{
    let post = {title: "POst One", body:"Hello Post one"};
    const sql = "INSERT INTO posts SET ?";
    db.query(sql, post, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("POST 1 Created");
    })
})

// Insert Post 2
app.get('/add2', (req, res)=>{
    let post = {title: "POst two", body:"Hello Post two"};
    const sql = "INSERT INTO posts SET ?";
    db.query(sql, post, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("POST 2 Created");
    })
})

// All Post
app.get('/posts', (req, res)=>{
    const sql = "SELECT * FROM posts";
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("POSTS FEtched");
    })
})

// One Post
app.get('/posts/:id', (req, res)=>{
    const sql = `SELECT * FROM posts WHERE id=${req.params.id}`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("POST FEtched");
    })
})

// Upadte Post
app.get('/update/:id', (req, res)=>{
    let title = "New Title";
    const sql = `UPDATE posts SET title='${title}' WHERE id=${req.params.id}`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("Update POST");
    })
})

// DELETE Post
app.get('/delete/:id', (req, res)=>{
    let title = "New Title";
    const sql = `DELETE FROM posts WHERE id=${req.params.id}`;
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("DELETE POST");
    })
})

app.listen(3000, ()=> {
    console.log('http://localhost:3000');
})