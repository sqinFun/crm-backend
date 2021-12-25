import {Schema, model, Types} from 'mongoose'

const schema = new Schema({
  name: {type: String, required: true},
  author: {type: Types.ObjectId, ref: 'User'},
})

export default model('Task', schema)
