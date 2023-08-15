'use strict';

/**
 * thrift-store controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::thrift-store.thrift-store');
