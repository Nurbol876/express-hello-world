const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use('/data', express.static(path.join(__dirname, 'data')));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
