const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/user');

passport.use(new GoogleStrategy(
    //Configuration object
    {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK
    },
    // Verifying callback function. . .
    // Marking a function as an async function allows us
    // to consume promises using the await keyword
    // Let's use async/await
    async function (acessToken, refreshToken, profile, cb) {
        // A user has logged in with OAuth
        try {
          let user = await User.findOne({ googleId: profile.id });
          // Existing user found
          if (user) return cb(null, user);
          // We have a new user via OAuth!
          user = await User.create({
            name: profile.displayName,
            googleId: profile.id,
            email: profile.emails[0].value,
            avatar: profile.photos[0].value,
          });
          return cb(null, user);
        } catch (err) {
          return cb(err);
        }
    }
    ));
    
    passport.serializeUser(function(user, cb) {
        cb(null, user._id);
    });

    passport.deserializeUser(async function(userId, cb) {
        cb(null, await User.findById(userId));
        // The above async/await code replaces this code
        // User.findById(userId).then(function(user) {
        //   cb(null, user);
        // });
      });