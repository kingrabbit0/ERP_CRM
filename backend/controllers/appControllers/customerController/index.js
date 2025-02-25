const createCRUDController = require('@/controllers/middlewaresControllers/createCRUDController');
const methods = createCRUDController('Customer');

const create = require('./create');
const update = require('./update');
const paginatedList = require('./paginatedList');
const read = require('./read');
const allList = require('./all');
const summary = require('./summary');
const remove = require('./remove');
const filterCustomer = require('./filterCustomer');

methods.list = paginatedList;
methods.listAll = allList;
methods.read = read;

methods.create = create;
methods.update = update;
methods.summary = summary;
methods.delete = remove;
methods.filterCustomer = filterCustomer;

module.exports = methods;
