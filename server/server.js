const express = require('express')
const app = express()
const mysql = require('mysql');
const bodyparser = require('body-parser')
const cors = require("cors")

app.use(cors())

app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree","userFour"]})
})

app.listen(5000, () => console.log('server started on port 5000'))

app.use(bodyparser.json())

var mysqlConnection = mysql.createConnection({
    host:'mysql01.cs.virginia.edu',
    user:'lna5nn',
    password:'Winter2022!!',
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

app.get('/medicalinfo', (req,res) => {
    mysqlConnection.query('SELECT * FROM medical_info', (err, rows, fields) => {
        if(!err)
        res.json(rows)
        else
        console.log(err)
    })
})

app.get('/insurance', (req,res) => {
    mysqlConnection.query('SELECT * FROM insurance_info', (err, rows, fields) => {
        if(!err)
        res.json(rows)
        else
        console.log(err)
    })
})

app.get('/appointments', (req,res) => {
    mysqlConnection.query('SELECT * FROM patient_appointments',(err,rows,fields) => {
        if(!err)
        res.json(rows)
        else
        console.log(err)
    })
})

app.get('/doctors', (req,res) => {
    mysqlConnection.query('SELECT * FROM doctor',(err,rows,fields) => {
        if(!err)
        res.json(rows)
        else
        console.log(err)
    })
})

app.get('/provider', (req,res) => {
    mysqlConnection.query('SELECT * FROM providers',(err,rows,fields) => {
        if(!err)
        res.json(rows)
        else
        console.log(err)
    })
})

app.get('/patients', (req,res) => {
    mysqlConnection.query('SELECT * FROM patient',(err,rows,fields) => {
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

app.post('/addpatient', (req, res) =>{
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


app.post('/addinsuranceinfo', (req,res) => {
    const ssn = req.body.ssn
    const policyNumber = req.body.policyNumber
    const companyName = req.body.companyName

    mysqlConnection.query("INSERT INTO `lna5nn`.`insurance_info` (`ssn`, `policyNumber`, `companyName`) VALUES (?, ?, ?)", [ssn, policyNumber, companyName], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send("values where inserted")
        }
    })

})


app.post('/medicalinfo', (req,res) => {
    const ssn = req.body.ssn
    const systolic = req.body.systolic
    const diastolic = req.body.diastolic
    const heartrate = req.body.heartrate
    const respirations = req.body.respirations
    const height = req.body.height
    const weight = req.body.weight


    mysqlConnection.query("INSERT INTO `lna5nn`.`medical_info` (`ssn`, `systolic`, `diastolic`, 'heartrate', 'respirations', 'height', 'weight') VALUES (?, ?, ?, ?, ?, ?, ?)", [ssn, systolic, diastolic, heartrate, respirations, height, weight], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send("values where inserted")
        }
    })

})

app.post('/addappointments', (req,res) => {
    const ssn = req.body.ssn
    const employeeNum = req.body.employeeNum
    const apointmentTime = re.body.appointmentTime

    mysqlConnection.query("INSERT INTO `lna5nn`.`insurance_info` (`ssn`, `employeeNum`, `apointmentTime`) VALUES (?, ?, ?)", [ssn, employeeNum, apointmentTime], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send("values where inserted")
        }
    })

})

app.post('/addappointments', (req,res) => {
    const employeeNum = req.body.employeeNum
    const name = req.body.name
    const phone = req.body.phone
    const email = req.body.email

    mysqlConnection.query("INSERT INTO `lna5nn`.`insurance_info` (`employeeNum`, `name`, `phone`, 'email') VALUES (?, ?, ?)", [employeeNum, name, phone, email], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send("values where inserted")
        }
    })

})
