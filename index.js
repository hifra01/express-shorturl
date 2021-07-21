const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const links = require('./models/Links');

const PORT = process.env.PORT || 3000;
const app = express();

const { MONGODB_URI } = process.env;
mongoose.connect(
  MONGODB_URI,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
);

app.use(cors());

app.get('/:alias', async (req, res) => {
  const urlAlias = req.params.alias;
  try {
    const urlSearch = await links.findOne({ alias: urlAlias });
    if (urlSearch !== null) {
      res.redirect(urlSearch.url);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is up on port ${PORT}`);
});
