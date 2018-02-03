//imports
const mongoose = require('mongoose');

//schema
const userprofileSchema = new mongoose.Schema({
  userName: String,
  password: String,
  PID: String,
  UserToken: String,
  verified: Bool
}, {});

/**
  * Password hash middleware.
  */
userSchema.pre('save', function save(next) {
 const user = this;

 if (!user.isModified('password')) { return next(); }
 bcrypt.genSalt(10, (err, salt) => {
   if (err) { return next(err); }
   bcrypt.hash(user.password, salt, null, (err, hash) => {
     if (err) { return next(err); }
     user.password = hash

     next();
   });
 });
});

/**
  * Helper method for validating user's password.
  */

userSchema.methods.comparePassword = function comparePassword(candidatePassword, cb) {
 bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
   cb(err, isMatch);
 });
};
//export
const Profile = mongoose.model('profile', profileSchema);

 module.exports = Chat;
