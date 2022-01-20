import mongoose from 'mongoose'
import colors from 'colors'

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.err(`Error: ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}
