'use strict';

/**
 * thrift-store router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::thrift-store.thrift-store');
