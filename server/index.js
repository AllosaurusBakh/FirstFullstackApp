import express from "express";
import mysql from "mysql";
import cors from "cors";

const PORT = 7017;
const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'optovichok'
});

db.connect(function (err) {
    if (err) {
        return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL server.');
});

app.get("/", (req, res) => {
    res.json("hello");
});

app.get("/providers", (req, res) => {
    const q = "SELECT * FROM optovichok.providers;";
    db.query(q, (err, data) => {
        if (err) {
            console.log(err);
            return res.json(err);
        }
        return res.json(data);
    });
});

app.get("/providers/:specialization_provider", (req, res) => {
    const providerSpecialization = req.params.specialization_provider;
    const q = "SELECT * FROM optovichok.providers WHERE specialization_provider=?;";
    db.query(q, [providerSpecialization], (err, data) => {
        if (err) {
            console.log(err);
            return res.json(err);
        }
        return res.json(data);
    });
});

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));
    } catch (err) {
        console.log(err);
    }
};

start();