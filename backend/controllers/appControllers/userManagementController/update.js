const mongoose = require('mongoose');

const Model = mongoose.model('User');

const update = async (req, res) => {
  try {
    let body = req.body;

    if (req.body.password !== req.body.confrimpassword) {
      return res.status(400).json({
        success: false,
        result: null,
        message: 'Confirm Pssword is not correct.',
      });
    }

    // Find document by id and updates with the required fields
    const result = await Model.findOneAndUpdate({ _id: req.params.id, removed: false }, body, {
      new: true, // return the new result instead of the old one
    }).exec();

    // Returning successfull response
    return res.status(200).json({
      success: true,
      result,
      message: 'we update this document by this id: ' + req.params.id,
    });
  } catch (error) {
    // If error is thrown by Mongoose due to required validations
    console.log(error);
    if (error.name == 'ValidationError') {
      return res.status(400).json({
        success: false,
        result: null,
        message: 'Required fields are not supplied',
      });
    } else {
      // Server Error
      return res.status(500).json({
        success: false,
        result: null,
        message: error.message,
      });
    }
  }
};
module.exports = update;
