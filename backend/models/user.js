import mongoose, { model } from 'mongoose'

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String
})

export default mongoose.model('User', userSchema)
