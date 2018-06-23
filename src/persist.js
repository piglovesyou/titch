// @flow

import bluebird from 'bluebird';
import redis from 'redis';

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

const persist = redis.createClient({
  host: process.env.REDIS_HOST || undefined,
});

export default persist;
