const mongoose = require('mongoose');

const Model = mongoose.model('Customer');

const filterCustomer = async (req, res) => {
  try {
    //  Query the database for a list of unique equipment name
    const customerFilterPromise = Model.distinct('name');

    const [customerFilter] = await Promise.all([
      customerFilterPromise,
    ]);

    return res.status(200).json({
      success: true,
      isLoading: true,
      result: {
        customer: customerFilter,
      },
      message: 'Successfully get filter fileds',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      result: {},
      message: error.message,
      error: error,
    });
  }
};

module.exports = filterCustomer;
