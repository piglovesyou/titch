import persist from './src/persist';

persist.setAsync('blaa', 'boom').then(x => {
  console.log(x);
});
