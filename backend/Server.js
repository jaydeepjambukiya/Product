const express = require('express')
const cookieParser = require('cookie-parser');
const app = express()
const dbconnect = require('./config/connerctdb');
const productRouter = require('./router/PoductRouter');
const userRouter = require('./router/userRouter');
const jwt = require("jsonwebtoken");
const cors = require('cors');


const port = 5000
const HOSTNAME = '127.0.0.1'
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));


app.use(cookieParser());
app.use(express.json());
app.use('/api/products', productRouter);
app.use('/api/user', userRouter);




// http://127.0.0.1:3000/api
dbconnect().then(() =>{
    console.log("🏃  Database connected successfully");
    app.listen(port, HOSTNAME, () => {
    console.log(`🚀 Example app listening at http://${HOSTNAME}:${port}`)
})
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

