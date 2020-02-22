const shortid = require("shortid");
const Stream = require("../../models/stream");

module.exports = (req, res, next) => {
  const newStream = new Stream({ streamid: shortid.generate() });

  newStream
    .save()
    .then(doc => {
      res.json({
        success: true,
        message: `stream ${doc.streamid} created successfully!`
      });
    })
    .catch(err => {
      res.status(400).json(err);
    });
};
