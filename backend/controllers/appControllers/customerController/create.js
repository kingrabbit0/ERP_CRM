const mongoose = require('mongoose');

const Model = mongoose.model('Customer');
const EquipmentModel = mongoose.model('Equipment');

const create = async (req, res) => {
  try {
    const { contacts = [], equipments = [] } = req.body;

    let body = req.body;
    let equipment_IDs = [];

    body['contacts'] = contacts;
    body['equipments'] = []; 
    body['createdBy'] = req.admin._id;

    // Creating a new document in the collection
    const result = await new Model(body).save();

    //  Updating the equipments list by id array
    for (let i = 0; i < equipments.lenght; i++) {
      let equipment = equipments[i];
      equipment['lastDate'] = equipment['nextDate'];
      equipment['createdBy'] = result._id;
      const equipment_result = await new EquipmentModel(equipment).save(); 
      equipment_IDs.push(equipment_result._id);
    }

    const updateResult = await Model.findOneAndUpdate(
      { _id: result._id },
      { equipments: equipment_IDs },
      {
        new: true,
      }
    ).exec();

    // Returning successfull response
    return res.status(200).json({
      success: true,
      result: updateResult,
      message: 'Quote created successfully',
    });
  } catch (error) {
    // If error is thrown by Mongoose due to required validations
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
module.exports = create;
