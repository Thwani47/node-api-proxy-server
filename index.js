const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const PORT = process.env.PORT || 5000;
const app = express();

// rate limit
const limiter = rateLimit({
	windowMs: 10 * 60 * 1000, // 10 mins
	max: 100
});

app.use(limiter);
app.set('truest proxy', 1);

app.use(cors());

// set static folder
app.use(express.static('public'));

// routes
app.use('/api', require('./routes'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
