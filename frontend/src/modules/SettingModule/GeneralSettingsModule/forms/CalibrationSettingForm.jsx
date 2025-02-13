import { Form, Select } from 'antd';

// import languages from '@/locale/languages';
import useLanguage from '@/locale/useLanguage';

export default function CalibrationSettingForm() {
  const translate = useLanguage();
  const intervalOptions = [
    { label: '6 '+ translate('Month') + 's', value: 6 },
    { label: '1 '+ translate('Year'), value: 12 },
    { label: '2 '+ translate('Year') + 's', value: 24 },
    { label: '4 '+ translate('Year') + 's', value: 48 },
  ];
  return (
    <>
      <Form.Item
        label={translate('interval')}
        name="interval"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select options={intervalOptions} />
      </Form.Item>
      {/* <Form.Item
        label={translate('language')}
        name="language"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          showSearch
          placeholder={translate('select language')}
          optionFilterProp="children"
          filterOption={(input, option) => (option?.label ?? '').includes(input)}
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? '').toLowerCase().startsWith((optionB?.label ?? '').toLowerCase())
          }
        >
          {languages.map((language) => (
            <Select.Option
              key={language.value}
              value={language.value}
              label={language.label.toLowerCase()}
            >
              <div className="demo-option-label-item">
                <span role="img" aria-label={language.label}>
                  {language.icon}
                </span>
                {language.label}
              </div>
            </Select.Option>
          ))}
        </Select>
      </Form.Item> */}
    </>
  );
}
