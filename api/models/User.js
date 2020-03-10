/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: { type: 'string', required: true },
    email: { type: 'string', required: true },

    city: { type: 'string', required: true },
    province: { type: 'string', required: true },
    state: { type: 'string', required: true },

    postalCode: { type: 'string', required: false },
    lat: { type: 'string', required: false },
    long: { type: 'string', required: false },
  },
};
