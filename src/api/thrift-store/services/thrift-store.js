'use strict';

/**
 * thrift-store service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::thrift-store.thrift-store');
