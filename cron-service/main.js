const { uid } = require ('uid');
const axios = require ('axios');
const Redlock = require ('redlock');
const Client = require ('ioredis');
const { DateTime } = require ('luxon');
const CronJob = require ('cron').CronJob;
const id = uid ();
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

const listToConsume = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ].reverse ();

async function request (message) {
  console.log ('Requesting');
  const resp = await axios.post (`http://${webServerHost}/${id}`, { message }, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  console.log ('Requested: ', resp.data);
}

async function cron () {
  const now = DateTime.now ().toFormat ('yyyy-LL-dd HH:mm:ss.u');
  console.log (`${now} Starting cron job`);
  let key;
  let lock = await redlock.acquire ([ 'mutex:lock:processId' ], 5000);
  key = await redisA.get ('listKey');
  if (!key) {
    key = uid ();
    await redisA.set ('listKey', key, 'ex', 30);
    console.log ('Listkey settled');
    const inserted = await redisA.lpush (key, listToConsume);
    console.log ('inserted', inserted);
    await request (`settled listKey and list ${key}`);
  }
  await lock.unlock ();

  let elem;
  do {
    let lock = await redlock.acquire ([ 'mutex:lock:processId_2' ], 5000);
    elem = await redisA.lpop (key);
    if (!elem && await redisA.exists (key)) {
      await redisA.del (key);
      await request (`cleaned list ${key}`);
    }
    await lock.unlock ();
    if (elem)
      await request (`elem ${elem}`);
    await sleep (Math.floor (Math.random () * 1000) + 100); // wait between 500ms and 1500ms
  } while (elem);
  console.log ('Finished cron job');
}

async function sleep (ms) {
  return new Promise ((resolve) => {
    setInterval (() => resolve (), ms);
  });
}