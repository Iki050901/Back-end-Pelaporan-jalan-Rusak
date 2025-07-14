import express from 'express';
const app = express();
app.use(cors());
app.get('/', (req, res) => res.send('Welcome to the Users API!'));
app.all('*', (req, res) => res.send("You've tried reaching a route that doesn't exist."));