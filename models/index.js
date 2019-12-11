let mongoose = require('mongoose');
const server = 'venkat290113:venkat113@ds255889.mlab.com:55889'; // REPLACE WITH YOUR DB SERVER
// const server = 'mongodb+srv://venkat290113:venkat113@cluster0-3e9a0.mongodb.net/node-react?retryWrites=true&w=majority';
// const server = '127.0.0.1:27017'; // REPLACE WITH YOUR DB SERVER
const database = 'node-react';      // REPLACE WITH YOUR DB NAME

class Database {
  constructor () {
    this._connect();
  }

  _connect () {
    console.log(`mongodb://${server}/${database}`);
    mongoose.connect(`mongodb://${server}/${database}`)
       .then(() => {
         mongoose.set('debug', true);
         console.log('Database connection successful');
       })
       .catch(err => {
         console.error('Database connection error', err);
       });
  }
}
module.exports = new Database();
