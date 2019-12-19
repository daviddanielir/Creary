const { Schema, model } = require('mongoose')
const PLM = require('passport-local-mongoose')

const userSchema = new Schema(
  {
    name: String,
    companyname: String,
    description: String,
    number: Number,
    email: String,
    file: String,
    photoURL: {
      type: String, 
      default:
        "https://microhealth.com/assets/images/illustrations/personal-user-illustration-@2x.png"
    },

  },
  {
    timestamps: true,
    versionKey: false
  }
)

userSchema.plugin(PLM, { usernameField: 'email' })

module.exports = model('User', userSchema)
