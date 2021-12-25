import {Schema, model} from 'mongoose'

const schema = new Schema({
  firstName: {type: String, required: true},
  middleName: {type: String, required: true},
  lastName: {type: String, required: true},
})

export default model('User', schema)
