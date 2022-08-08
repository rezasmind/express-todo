const express = require('express')
const app = express()
const {v4 } = require("uuid")

// Parse json middleware
app.use(express.json())

app.use("/todos",require('./routes/todos'))


app.listen(3000, () => {
    console.log('Server running on port 3000')
})