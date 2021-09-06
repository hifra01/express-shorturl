require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const api = require('./api/routes');
const db = require('./services/MongoDBServices');
const ClientError = require('./exceptions/ClientError');

const PORT = process.env.PORT || 3000;
const { MONGODB_URI } = process.env;

const app = express();

mongoose.connect(
  MONGODB_URI,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
).catch((error) => console.error(error));

app.use(cors());
app.use(express.json());

app.use('/api', api);

app.get('/:alias', async (req, res, next) => {
  try {
    const urlAlias = req.params.alias;
    const urlSearch = await db.findUrl(urlAlias);
    res.redirect(urlSearch.url);
  } catch (e) {
    next(e);
  }
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.statusCode).send({
      status: 'failed',
      message: err.message,
    });
  } else {
    console.error(err.stack);
    res.status(500).send({
      status: 'failed',
      message: 'Internal Server Error',
    });
  }
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is up on port ${PORT}`);
});
