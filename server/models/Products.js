const { Schema, model } = require('mongoose')
const PLM = require('passport-local-mongoose')

const productSchema = new Schema(
    {
      nameproduct: String,
      descriptionproduct: String,
      photo: String,
    },
    
  )
  
  
  
  module.exports = model('Product', productSchema)