const cors = require('cors');
const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createConnection({
    database: 'next_crud',
    host: 'localhost',
    port: 3305,
    user: 'root',
    password: ''
});

app.use(cors());
app.use(express.json());

// GET ROUTES
app.get('/getContacts', (req, res) => {
    let SQL = 'SELECT * FROM contacts';

    db.query(SQL, (err, result) => {
        if(err) console.log(err);
        else res.send(result);
    });

});

app.get('/getContactById/:id', (req, res) => {
    const {id} = req.params;

    let SQL = 'SELECT * FROM contacts WHERE id=?'

    db.query(SQL, [id], (err, result) => {
        if(err) console.log(err);
        else res.send(result);
    })
})

// POST ROUTES
app.post('/addContact', (req, res) => {
    
    const {id} = req.body;
    const {name} = req.body;
    const {email} = req.body;
    const {phone} = req.body;
    const {instagram} = req.body;
    const {github} = req.body;
    
    let SQL = `INSERT INTO contacts (id, name, email, phone, instagram, github) VALUES (NULL, ?, ?, ?, ?, ?);`

    db.query(SQL, [name, email, phone, instagram, github], (err, result) => {
        if(err) console.log('ERROOOU: '+err);
    });
});

// DELETE ROUTES
app.delete('/deleteContact/:id', (req, res) => {
    const {id} = req.params;
    let SQL = `DELETE FROM contacts WHERE id= ?`;

    db.query(SQL, [id], (err, result) => {
        if(err) console.log(err)
        else res.send(result)
    });
});

// PUT ROUTES
app.put('/editContact', (req, res) => {
    const {id} = req.body;
    const {name} = req.body;
    const {email} = req.body;
    const {phone} = req.body;
    const {instagram} = req.body;
    const {github} = req.body;

    let SQL = "UPDATE contacts SET name=?, email=?, phone=?, instagram=?, github=? WHERE contacts.id=?";

    if(id, name, email, phone, instagram, github) {
        db.query(SQL, [name, email, phone, instagram, github, id], (err, result) => {
            if(err) console.log(err);
        })
    }
})

// RUNNING SERVER
app.listen(3001,() => {
    console.log('Server running');
});