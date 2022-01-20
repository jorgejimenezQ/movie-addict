import dotenv from 'dotenv'
import express from 'express'
import { connectDB } from './db/mongoose.js'

// Some configurations
dotenv.config()
connectDB()

// Get an express instance
const app = express()

// Setup json use
app.use(express.json())

/** TEST */
// app.get('/', (req, res) => res.send('<h1>server live...<h1>'))

/** API ROUTES */
// app.use(userRouter)
// app.use(productRouter)
// app.use(orderRouter)

/** PUBLIC ACCESS */
app.use(
  '/assets',
  express.static(new URL('../public', import.meta.url).pathname)
)

app.get('/test', (req, res) => {
  res.send('<h1>test demo<h1>')
})

export default app
