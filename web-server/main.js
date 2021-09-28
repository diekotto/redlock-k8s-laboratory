const express = require ('express');

const app = express ();

app.get ('/:tagId', function (req, res) {
  console.log (`Hello ${req.params.tagId}`, new Date ());
  res.send (JSON.stringify ({ ok: true }));
});
const port = process.env.NODE_PORT || 3000;
app.listen (port, () => {
  console.log (`Express started on port ${port}`);
});
