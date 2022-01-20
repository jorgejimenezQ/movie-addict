import app from './app.js'
import colors from 'colors'

const port = process.env.PORT || 3000

app.listen(
  port,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${port}`.yellow.bold
  )
)
