/* eslint-disable new-cap */
// eslint-disable-next-line strict
'use strict';

const schema = require('./products-schema.js');
const Mongo = require('../mongo.js');
class products extends Mongo{
  constructor(){
    super(schema);
  }
}

module.exports = new products() ;