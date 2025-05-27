require('dotenv').config();
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const customProductRoutes = require('./routes/customProductRoutes');
const cors = require('cors'); // ← middleware cors
const path = require('path'); // ← tambahkan ini untuk menjalandan middleware multer
const productRoutes = require('./routes/productRoutes');

app.use(cors()); // ← jalankan corsnya
app.use(express.json());

app.use('/api', userRoutes);
app.use('/api/custom-products', customProductRoutes);
app.use('/api/products', productRoutes);

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));