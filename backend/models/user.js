const mongoose = require('mongoose');
var crypto = require('crypto'); 

// Schema for the database
// Database is restrict to this schema
const userSchema = mongoose.Schema({
  name:{type:String, required:true},
  email:{type:String, required:true, unique:true},
  isAdmin:{type:Boolean, required:true, default:false},
  phone:{type:String, required:true, unique:true, validate: {
    validator: function(v) {
      return /\d{10}/.test(v);
    },
    message: props => `${props.value} is not a valid phone number!`}},
  hash:String,
  salt: String
});

userSchema.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64,'sha512').toString('hex');
};

userSchema.methods.validPassword = function(password){
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
  return this.hash === hash;
}
const User = module.exports = mongoose.model('User', userSchema); 