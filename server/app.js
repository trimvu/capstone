
const express = require('express');
const app = express();
let port = process.env.PORT || 3001;
require("dotenv").config()


app.use(require('./routes/authentication.js'))
app.use(require('./routes/numberData'))

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})