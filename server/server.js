import express from 'express';

const app = express();
const PORT = 3000;

// middleware to read JSON body
app.use(express.json());

// serve frontend
app.use(express.static('public'));

// 🔹 Signup API
app.post('/api/signup', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  // fake DB save (for now)
  console.log('Saving user:', email);

  res.json({ message: 'Signup successful' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});