import express from 'express';
import { connectDB } from './db.js';

const app = express();
app.use(express.json());
const db = connectDB();

app.get('/api/users', (req, res) => {
  db.query('SELECT * FROM users', (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email)
    return res.status(400).json({ error: 'Le nom et l’email sont requis.' });

  db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Utilisateur ajouté', id: result.insertId });
  });
});

app.listen(3000, () => console.log('🚀 Serveur Node lancé sur le port 3000'));
