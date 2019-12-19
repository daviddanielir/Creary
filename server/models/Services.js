const { Schema, model } = require('mongoose')
const PLM = require('passport-local-mongoose')

const serviceSchema = new Schema(
    {
      nameservice: String,
      descriptionservice: String,
      photo: String,
    },
    {
      timestamps: true,
      versionKey: false
    }
    
  )
  
  module.exports = model('Services', serviceSchema)