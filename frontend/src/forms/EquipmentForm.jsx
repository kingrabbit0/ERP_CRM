import { Form, Input, message, Select } from 'antd';
import { UserOutlined, CalendarOutlined } from '@ant-design/icons';

import useLanguage from '@/locale/useLanguage';

export default function EquipmentForm({ isUpdateForm = false }) {
  const translate = useLanguage();
  const validateEmptyString = (_, value) => {
    if (value && value.trim() === '') {
      return Promise.reject(new Error('Field cannot be empty'));
    }

    return Promise.resolve();
  };

  const handleCustomerChange = (value) => {
    message.info(`${'Click on customer menu item.' + value}`);
  };

  const handleIntervalChange = (value) => {
    message.info(`${'Click on interval menu item.' + value}`);
  };

  const customerItems = [
    { label: 'Customer', value: '0' },
    { label: 'David 1', value: '1' },
    { label: 'David 2', value: '2' },
    { label: 'David 3', value: '3' },
    { label: 'David 4', value: '4', disabled: true },
  ];

  const intervalItems = [
    { label: 'Intervals', value: '0' },
    { label: '6 Months', value: '1' },
    { label: '1 Year', value: '2' },
  ];

  return (
    <>
      <Form.Item
        label={translate('equipment_name')}
        name="equipmentName"
        rules={[
          {
            required: true,
          },
          {
            validator: validateEmptyString,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={translate('serial_number')}
        name="serialNumber"
        rules={[
          {
            required: true,
          },
          {
            validator: validateEmptyString,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={translate('customer')}
        name="customer"
        rules={[
          {
            required: true,
          },
          {
            validator: validateEmptyString,
          },
        ]}
        style={{
          display: 'inline-block',
          width: 'calc(50%)',
          paddingRight: '5px',
        }}
      >
        <Select
          suffixIcon={<UserOutlined />}
          defaultValue="0"
          style={{ width: 120 }}
          onChange={handleCustomerChange}
          options={customerItems}
        />
      </Form.Item>
      <Form.Item
        label={translate('calibration_interval')}
        name="interval"
        rules={[
          {
            required: true,
          },
          {
            validator: validateEmptyString,
          },
        ]}
        style={{
          display: 'inline-block',
          width: 'calc(50%)',
          paddingRight: '5px',
        }}
      >
        <Select
          suffixIcon={<CalendarOutlined />}
          defaultValue="0"
          style={{ width: 120 }}
          onChange={handleIntervalChange}
          options={intervalItems}
        />
      </Form.Item>
      <Form.Item
        label={translate('calibration_next_date')}
        rules={[
          {
            required: true,
          },
          {
            validator: validateEmptyString,
          },
        ]}
      >
        <Input />
      </Form.Item>
    </>
  );
}
