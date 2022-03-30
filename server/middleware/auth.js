//todo 
// first i need to create a new project in google developers console
// then i will be given a client ID and client secret which must be provided to passport
// then i will need to configure a redirect URI with matches the rout in our application.
require('dotenv').config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const { Users } = require('../database/models/users.js')

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:5555/google/callback",
  passReqToCallback: true
},
  function (request, accessToken, refreshToken, profile, done) {
    Users.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));