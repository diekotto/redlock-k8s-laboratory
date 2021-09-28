const uid = require ('uid');
const axios = require ('axios');
const Redlock = require ('redlock');
const Client = require ('ioredis');
const CronJob = require ('cron').CronJob;
const id = uid.uid ();

console.log (`Hello world cron-service ${id}`);

const redisA = new Client ({ host: 'redis' });
const redlock = new Redlock ([ redisA ]);

const job = new CronJob ('* * * * *', cron, null, true, 'Europe/Madrid');
job.start ();

async function request () {
  console.log ('Requesting');
  const resp = await axios.get (`http://web-server/${id}`);
  console.log ('Requested: ', resp.data);
}

async function cron () {
  let lock = await redlock.acquire ([ 'mutex:lock:processId' ], 5000);
  await request ();
  await lock.unlock ();
}