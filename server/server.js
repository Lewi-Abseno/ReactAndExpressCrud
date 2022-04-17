require('dotenv').config();

const express = require('express')
const app = express()
const mysql = require('mysql');
const bodyParser = require('body-parser')
const cors = require("cors")
var APIRouter = require("./API");

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

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.listen(5000, () => console.log('server started on port 5000'))

app.use(bodyParser.json())

app.use("/API", APIRouter);

const mysqlConnection = require('./database');

app.get('/companies', (req, res) => {
    mysqlConnection.query('SELECT * FROM companies', (err, rows, fields) =>{
        if(!err)
        res.json(rows)
        else
        console.log(err)
    })
})

app.get('/medicalinfo', (req,res) => {
    mysqlConnection.query('SELECT * FROM medical_info JOIN patient ON medical_info.ssn = patient.ssn', (err, rows, fields) => {
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
    mysqlConnection.query('SELECT * FROM patient JOIN patient_demo ON patient.ssn = patient_demo.ssn',(err,rows,fields) => {
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


app.post('/addmedicalinfo', (req,res) => {
    const ssn = req.body.ssn
    const systolic = req.body.systolic
    const diastolic = req.body.diastolic
    const heartrate = req.body.heartrate
    const respirations = req.body.respirations
    const height = req.body.height
    const weight = req.body.weight


    mysqlConnection.query("INSERT INTO `lna5nn`.`medical_info` (`ssn`, `systolic`, `diastolic`, 'heartrate', 'respirations', 'height', 'weight') VALUES (?, ?, ?, ?, ?, ?, ?)", 
    [ssn, systolic, diastolic, heartrate, respirations, height, weight], (err, result) => {
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