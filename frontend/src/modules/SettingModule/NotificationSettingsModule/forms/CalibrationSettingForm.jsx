import { Form, Input, Select, Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

import languages from '@/locale/languages';
import useLanguage from '@/locale/useLanguage';

export default function CalibrationSettingForm() {
  const translate = useLanguage();

  const notification_timing = [
    { label: '30 Days', value: '30' },
    { label: '7 Days', value: '7' },
    { label: '1 Days', value: '1' },
  ];
  return (
    <>
      <Form.Item
        label={translate('Email Notification')}
        name="email_notification"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Switch
          defaultChecked = {true}
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
        />
      </Form.Item>
      <Form.Item
        label={translate('SMS Notification')}
        name="sms_notification"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Switch
          defaultChecked = {true}
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
        />
      </Form.Item>
      <Form.Item
        label={translate('Timing')}
        name="timing"
        rules={[
          {
            required: true,
          },
        ]}
        initialValue={'1'}
      >
        <Select options={notification_timing}></Select>
      </Form.Item>
    </>
  );
}
