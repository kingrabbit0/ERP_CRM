const fs = require('fs');
const path = require('path');
const custom = require('@/controllers/middlewaresControllers/pdfController');
const { SendEmailNotification, SendSMSNotification } = require('@/emailTemplate/Notification');
const mongoose = require('mongoose');
const NotificationModel = mongoose.model('Notification');
const SettingModel = mongoose.model('Setting');
const EmailTModel = mongoose.model('Email');
const ObjectId = mongoose.Types.ObjectId;
const { Resend } = require('resend');

const sendMail = async () => {
  let email_setting = await SettingModel.find(
    { settingKey: 'email_enabled' },
    { _id: 0, settingValue: 1 }
  );
  let sms_setting = await SettingModel.find(
    { settingKey: 'sms_enabled' },
    { _id: 0, settingValue: 1 }
  );

  email_setting = email_setting[0] ? email_setting[0]['settingValue'] : false;
  sms_setting = sms_setting[0] ? sms_setting[0]['settingValue'] : false;

  const startDate = new Date();
  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 2);

  const results = await NotificationModel.find({
    // date: { $gte: startDate, $lte: endDate },
    status: 'pending',
    removed: false,
  })
    .sort({ date: 'asc' })
    .populate({
      path: 'equipment',
      populate: {
        path: 'createdBy',
        mode: 'Customer',
      },
    });

  for (let i = 0; i < results.length; i++) {
    const notification = results[i];
    const to = notification['equipment']['createdBy']['email'];
    let from = '';
    for (let j = 0; j < notification['equipment']['createdBy']['contacts'].length; j++) {
      const contactInfo = notification['equipment']['createdBy']['contacts'][i];
      if (contactInfo['name'] === notification['equipment']['contact']) {
        from = contactInfo['email'];
      }
    }
    const contact = notification['equipment']['contact'];
    const equipment = notification['equipment']['name'];
    const serial = notification['equipment']['serial'];
    const date = notification['date'];

    if (email_setting) {
      sendViaEmailApi(from, to, contact, equipment, serial, date);
    }

    if (sms_setting) {
      // sendViaSMSApi(from, to, contact, equipment, serial, date);
    }
  }
};

const sendViaEmailApi = async (from, to, contact, equipment, serial, date) => {
  const resend = new Resend(process.env.RESEND_API);

  let title = '';
  let body = '';

  const results = await EmailTModel.find(
    {
      emailKey: 'email_template_default',
      removed: false,
    },
    { emailBody: 1, emailSubject: 1 }
  );

  if (results[0]) {
    title = results[0]['emailSubject'];
    body = results[0]['emailBody'];

    body = body.replace(/{{contact}}/g, "${contact}");
    body = body.replace(/{{equipment}}/g, "${equipment}");
    body = body.replace(/{{serial}}/g, "${serial}");
    body = body.replace(/{{date}}/g, "${date}");
  }

  // Send the mail using the send method
  const data = await resend.emails.send({
    from: 'albertwalsh78@gmail.com',
    to: 'bohdanlutsenko760@gmail.com',
    subject: 'Equipment Calibration',
    html: SendEmailNotification({ title, body, contact, equipment, serial, date }),
  });

  return data;
};

const sendViaSMSApi = async (from, to, contact, equipment, serial, date) => {
  let title = '';
  let body = '';

  const results = await EmailTModel.find(
    {
      emailKey: 'sms_template_default',
      removed: false,
    },
    { emailBody: 1, emailSubject: 1 }
  );

  if (results[0]) {
    title = results[0]['emailSubject'];
    body = results[0]['emailBody'];

    body = body.replace(/{{contact}}/g, "${contact}");
    body = body.replace(/{{equipment}}/g, "${equipment}");
    body = body.replace(/{{serial}}/g, "${serial}");
    body = body.replace(/{{date}}/g, "${date}");
  }
};

module.exports = sendMail;
