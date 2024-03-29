const dotenv = require('dotenv');
const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')


dotenv.config();
connectToMongo()

const app = express()
// const port = 5000
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
  res.send('hello to vehiclePro')
})
//Routes
app.use('/user',require('./routers/user'))
app.use('/vehicles',require('./routers/vehicle'))
app.use('/cart',require('./routers/cart'))
app.use('/order',require('./routers/order'))

app.listen(port, () => {
  console.log(`vehiclestore app listening on port ${port}`)
})
