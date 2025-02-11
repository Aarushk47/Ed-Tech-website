import mongoose from 'mongoose'

const notesSchema = new mongoose.Schema({
  tutor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tutor',
    required: true
  },
  playlist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Playlist',
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  note: {
    type: String,
  },
  thumb: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
    required: true
  },
  status: {
    type: String,
    default: 'deactive',
    required: true
  }
})

export default mongoose.model('note', notesSchema)
