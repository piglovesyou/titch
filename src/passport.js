import passport from 'passport';
import { Strategy as TwitterStrategy } from 'passport-facebook';
import persist from './persist';
import config from './config';

/**
 * Sign in with Facebook.
 */
passport.use();
passport.use(new TwitterStrategy(
  {
    consumerKey: config.auth.twitter.key,
    consumerSecret: config.auth.twitter.secret,
    callbackURL: 'http://127.0.0.1:3000/auth/twitter/callback',
  },
  (async (token, tokenSecret, profile, cb) => {
    const user = JSON.stringify({ ...profile, _id: profile.id });
    const x = await persist.set(`user:${profile.id}`, user).catch((err) => {
      cb(err);
    });
    cb(null, x);
  }),
));

export default passport;
