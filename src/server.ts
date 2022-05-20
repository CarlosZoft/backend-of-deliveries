import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import { routes } from './routes'
const port = 3030

const app = express()
app.use(express.json())

app.use(routes)

app.listen(port, () => console.log(`Server is running on port ${port}`))