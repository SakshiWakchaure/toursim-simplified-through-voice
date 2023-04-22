const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app= express();
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    return res.json("from backend side");
})

const db=mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "tourism"
})

app.post('/users', (req,res)=>{
    const sql="INSERT INTO users (name, email,  password) VALUES (?)";
    const inpval = [
        req.body.name,
        req.body.email,
        req.body.password
    ]

    db.query(sql,[inpval], (err, data) =>{
        if(err){
            return res.json(err);
        }
        return res.json(data);
    })
})

app.listen(8081, ()=>{
    console.log("listening");      
})