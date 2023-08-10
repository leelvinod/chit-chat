const mongoose = require("mongoose")
const colors = require("colors")

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI
    const conn = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold)
    process.exit()
  }
}

module.exports = connectDB
