import passport from 'passport';
import { Strategy as TwitterStrategy } from 'passport-twitter';
import persist from './persist';
import config from './config';
import type { TwitterProfile } from './types/twitter';
import type { UserType } from './types/index';

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  const json = await persist.getAsync(`user:${id}`);
  done(null, (JSON.parse(json): TwitterProfile));
});

passport.use('twitter', new TwitterStrategy({
  consumerKey: config.auth.twitter.key,
  consumerSecret: config.auth.twitter.secret,
  callbackURL: 'http://localhost:3000/login/twitter/callback',
}, (async (token, tokenSecret, profile: TwitterProfile, cb) => {
    const user: UserType = {
      _id: profile.id,
      name: profile.displayName,
      image: profile.photos[0].value,
      provider: 'twitter',
    };
    const json = JSON.stringify(user);
    await persist.setAsync(`user:${profile.id}`, json).catch(cb);
    cb(null, user);
  })));

export default passport;
