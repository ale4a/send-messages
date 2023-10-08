const express = require('express');
const routes = require('./src/routes/routes');

const app = express()

app.use('/api', routes)

app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})


