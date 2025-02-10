const createCRUDController = require('@/controllers/middlewaresControllers/createCRUDController');
const methods = createCRUDController('Equipment');

const create = require('./create');
const remove = require('./remove');
const update = require('./update');
const paginatedList = require('./paginatedList');
const filterFieldsList = require('./filterFieldsList');
const filterPaginatedList = require('./filterPaginatedList');
const upcoming = require('./upcoming');
const agreement = require('./agreement');
// const read = require('./read');
// const allList = require('./all');
const summary = require('./summary');

methods.create = create;
methods.delete = remove;
methods.list = paginatedList;
methods.filterData = filterPaginatedList;
methods.filterfields = filterFieldsList;
// methods.listAll = allList;
// methods.read = read;

// methods.create = create;
methods.update = update;
methods.summary = summary;
methods.upcoming = upcoming;
methods.agreement = agreement;

module.exports = methods;
