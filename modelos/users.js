'use strict'

const mongoose=require('mongoose')
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  timestamp: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    default: '',
    trim: true,
    required: true
  },
  username: {
    type: String,
    default: '',
    trim: true,
    required: true
  },
  email: {
    type: String,
    default: '',
    trim: true,
    required: true
  },
  password: {
    type: String,
    default: '',
    required: true
  },
  role:{
    type:String,
    default:''
  }
});

UserSchema.pre('save', function (next) {
  const users = this,
    SALT_FACTOR = 5;

  if (!users.isModified('password')) return next();

  bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(users.password, salt, null, (err, hash) => {
      if (err) return next(err);
      users.password = hash;
      next();
    });
  });
});


UserSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    console.log(candidatePassword);
    console.log("password :",this.password)
    if (err) { 
      console.log(err);
      return cb(err); 
    }

    cb(null, isMatch);
  });
};

module.exports = mongoose.model('User', UserSchema);