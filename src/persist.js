// @flow

import bluebird from 'bluebird';
import redis from 'redis';

bluebird.promisifyAll(redis);

const client = redis.createClient({
  host: process.env.REDIS_HOST || undefined,
});

export default client;
