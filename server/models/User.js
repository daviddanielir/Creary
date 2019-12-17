const { Schema, model } = require('mongoose')
const PLM = require('passport-local-mongoose')

const userSchema = new Schema(
  {
    name: String,
    companyname: String,
    number: Number,
    email: String,
    photoURL: {
      type: String, 
      default:
        "https://microhealth.com/assets/images/illustrations/personal-user-illustration-@2x.png"
    },
    file:String

  },
  {
    timestamps: true,
    versionKey: false
  }
)

userSchema.plugin(PLM, { usernameField: 'email' })

module.exports = model('User', userSchema)
