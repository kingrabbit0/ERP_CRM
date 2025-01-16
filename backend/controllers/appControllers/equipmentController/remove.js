const mongoose = require('mongoose');

const Model = mongoose.model('Customer');
const EquipmentModel = mongoose.model('Equipment');

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await EquipmentModel.findOneAndUpdate(
      { _id: id, removed: false },
      {
        $set: {
          removed: true,
        },
      }
    ).exec();
    if (!result) {
      return res.status(404).json({
        success: false,
        result: null,
        message: 'No Equipment found by this id: ' + id,
      });
    }
    return res.status(200).json({
      success: true,
      result,
      message: 'Successfully Deleted the Equipment by id: ' + id,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      result: null,
      message: error.message,
      error: error,
    });
  }
};
module.exports = remove;
