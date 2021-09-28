const uid = require ('uid');
const axios = require ('axios');
const Redlock = require ('redlock');
const Client = require ('ioredis');
const CronJob = require ('cron').CronJob;
const id = uid.uid ();
const redisHost = process.env.REDIS_HOST || 'redis';
const webServerHost = process.env.WEB_SERVER_HOST || 'web-server';
console.log (`Hello world cron-service ${id}`);

const redisA = new Client ({ host: redisHost });
const redlock = new Redlock (
  [ redisA ],
  {
    retryCount: 10,
    retryDelay: 500, // time in ms
    // the max time in ms randomly added to retries
    // to improve performance under high contention
    retryJitter: 500, // time in ms
  });

const job = new CronJob ('* * * * *', cron, null, true, 'Europe/Madrid');
job.start ();

console.log (`Cron ${id} is up and running...`);

async function request () {
  console.log ('Requesting');
  const resp = await axios.get (`http://${webServerHost}/${id}`);
  console.log ('Requested: ', resp.data);
}

async function cron () {
  console.log ('Starting cron job');
  let lock = await redlock.acquire ([ 'mutex:lock:processId' ], 5000);
  await request ();
  await sleep (900);
  await lock.unlock ();
  console.log ('Finished cron job');
}

async function sleep (ms) {
  return new Promise ((resolve) => {
    setInterval (() => resolve (), ms);
  });
}