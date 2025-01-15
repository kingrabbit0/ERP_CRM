const createCRUDController = require('@/controllers/middlewaresControllers/createCRUDController');
const methods = createCRUDController('Equipment');

const remove = require('./remove');
const summary = require('./summary');

methods.delete = remove;
methods.summary = summary;

module.exports = methods;
