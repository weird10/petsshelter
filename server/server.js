
const express = require('express')
const app = express();
const PORT = 8000
const cors = require('cors')

require("./config/mongoose.config");

// middleware for formatting and allowing POST Requests
app.use(express.json()) 
app.use(express.urlencoded({ extended: true }));

app.use (
    cors ({
        origin: 'http://localhost:3000',
    }),
)

const Routes = require('./routes/pet.routes')
Routes(app);   

app.listen(PORT, () => {
    console.log(`Listening at Port ${PORT}`)
})