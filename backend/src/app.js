import dotenv from 'dotenv'
import express from 'express'
// import { connectDB } from './db/mongoose.js'
import apiRouter from './routes/api.js'
import cors from 'cors'

// Some configurations
dotenv.config()
// connectDB()

// Get an express instance
const app = express()

// Allow Cross Origin
app.use(cors())

// Setup json use
app.use(express.json())

/** TEST */
app.get('/', (req, res) => res.send('<h1>server live...<h1>'))

/** API ROUTES */

/** EXAMPLES */
// app.use(userRouter)
// app.use(productRouter)
// app.use(orderRouter)
app.use(apiRouter)

/** PUBLIC ACCESS */
app.use(
  '/assets',
  express.static(new URL('../public', import.meta.url).pathname)
)

app.get('/test', (req, res) => {
  res.send('<h1>test demo<h1>')
})

export default app
