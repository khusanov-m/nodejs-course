const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = require('./app');

// console.log(process.env);

const port = process.env.PORT || 8000;
app.listen(port, '127.0.0.1', () => {
  // eslint-disable-next-line no-console
  console.log(`App running on port ${port}...`);
});
