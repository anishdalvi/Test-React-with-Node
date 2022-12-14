// "type":"module" should be added in package.json if you want to import things just like in react and not in express

import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect()