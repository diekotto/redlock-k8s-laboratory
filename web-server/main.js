const express = require ('express');
const BodyParser = require ('body-parser');

const { DateTime } = require ('luxon');

let cronResume = {};

const app = express ();
app.use (BodyParser.json ());

app.get ('/:id', function (req, res) {
  console.log (`Hello ${req.params.id}`, new Date ());
  res.send (JSON.stringify ({ ok: true }));
});

app.post ('/:id', function (req, res) {
  const now = DateTime.now ();
  const id = req.params.id;
  const message = req.body.message;
  console.log (now.toFormat ('mm:ss.u'), id, ': ', message);
  const regex = /(\d+)$/;
  const g = regex.exec (message);
  if (!message.includes ('settled') && g[1]) {
    if (!cronResume[id]) cronResume[id] = [ g[1] ];
    else cronResume[id].push (g[1]);
  }
  if (message.endsWith ('14')) {
    console.log ('resume-cron:');
    Object.keys (cronResume).forEach (k => {
      console.log (`${k}: `, cronResume[k]);
    });
    console.log ('---');
  } else if (message.includes ('settled')) {
    cronResume = {};
    console.log ('Restarted resume-cron');
  }
  res.send (JSON.stringify ({ ok: true }));
});

const port = process.env.NODE_PORT || 3000;
app.listen (port, () => {
  console.log (`Express started on port ${port}`);
});
