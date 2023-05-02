import express from "express"
import bodyParser from 'body-parser'
import mongoose from "mongoose"
import cors from "cors"
import dotenv from 'dotenv'
import helmet from "helmet"
import morgan from "morgan"
import clientRoutes from "./routes/client.js"
import generalRoutes from "./routes/general.js"
import managementRoutes from "./routes/management.js"
import salesRoutes from "./routes/sales.js"

import User from "./models/user.js"
import Product from "./models/products.js"
import ProductStat from "./models/productStat.js"

import {dataUser, dataProductStat, dataProduct, dataTransaction, dataOverallStat} from "./data/index.js"
import Transaction from "./models/transactions.js"
import OverallStat from "./models/overallStat.js"

/* Config */
dotenv.config();
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}))
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())

/* Routes */
app.use("/client",clientRoutes)
app.use("/general",generalRoutes)
app.use("/management",managementRoutes)
app.use("/sales",salesRoutes)

/* Mongoose Setup */
const Port = process.env.PORT || 9000;
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    app.listen(Port, ()=> console.log(`Server Port ${Port}`))

    // import users data to mongo only once
    // User.insertMany(dataUser)

    // import products data to mongo only once
    // Product.insertMany(dataProduct)

    // import productsStat data to mongo only once
    // ProductStat.insertMany(dataProductStat)

    // import transactions data to mongo only once
    // Transaction.insertMany(dataTransaction)

    // import overallSjtat data to mongo only once
    // OverallStat.insertMany(dataOverallStat)
    
})
.catch((error)=> console.log(`${error} did not connect`))

