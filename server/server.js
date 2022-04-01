const express = require('express')
const app = express()
const mysql = require('mysql');
const bodyparser = require('body-parser')
const cors = require("cors")
const helmet = require("helmet")
const session = require("cookie-session")

//cookie-session middleware to prevent server profiling and cookie based attacks
const expiryDate = new Date(Date.now() + 60 * 60 * 1000) // 1 hour expiry
app.use(session({
    name: 'session',
    keys: ['key1', 'key2'],
    cookie: {
        secure: true,
        httpOnly: true,
        expires: expiryDate
    }
}))

app.use(helmet()) //HTTP header vulnerability protection

app.use(cors())

app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree","userFour"]})
})

app.listen(5000, () => console.log('server started on port 5000'))

app.use(bodyparser.json())

var mysqlConnection = mysql.createConnection({
    host:'mysql01.cs.virginia.edu',
    user:'lna5nn',
    password:'cs4750project',
    database:'lna5nn',
    multipleStatements: true
});

mysqlConnection.connect((err)=>{
    if(!err)
    console.log('DB connection succeeded');
    else
    console.log('DB connection failed' + JSON.stringify(err,undefined,2));
})

app.get('/companies', (req, res) => {
    mysqlConnection.query('SELECT * FROM companies', (err, rows, fields) =>{
        if(!err)
        res.json(rows)
        else
        console.log(err)
    })
})

//add new patient
// app.get('/patient',(req, res) => {
//     let sql = "INSERT INTO `lna5nn`.`patient` (`ssn`, `name`, `email`, `phone`, `race`, `age`) VALUES ('578157698', 'Jack Dorsey', 'jd@gmail.com', '5712242294', 'Vanuatuan', '15')";
//     mysqlConnection.query(sql, (err, results) => {
//       if(err) 
//       console.log(err);
//       else
//       res.send("Hello")
//     });
// });

app.post('/patient', (req, res) =>{
    const ssn = req.body.SSN
    const name = req.body.name
    const email = req.body.email
    const phone = req.body.phone
    const race = req.body.race
    const age = req.body.age

    mysqlConnection.query("INSERT INTO `lna5nn`.`patient` (`ssn`, `name`, `email`, `phone`, `race`, `age`) VALUES (?, ?, ?, ?, ?, ?)", [ssn, name, email, phone, race, age], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send("values where inserted")
        }
    })

})
