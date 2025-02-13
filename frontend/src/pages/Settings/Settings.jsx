import {
  SettingOutlined,
  // FileTextOutlined,
  // CreditCardOutlined,
  // DollarOutlined,
  // FileImageOutlined,
  AlertOutlined,
} from '@ant-design/icons';

import TabsContent from '@/components/TabsContent/TabsContent';

// import CompanyLogoSettings from './CompanyLogoSettings';
import GeneralSettings from './GeneralSettings';
import NotificationSettings from './NotificationSettings';
// import PaymentSettings from './PaymentSettings';
// import InvoiceSettings from './InvoiceSettings';
// import MoneyFormatSettings from './MoneyFormatSettings';

import useLanguage from '@/locale/useLanguage';

export default function Settings() {
  const translate = useLanguage();
  const content = [
    {
      label: translate('General Settings'),
      icon: <SettingOutlined />,
      children: <GeneralSettings />,
    },
    {
      label: translate('notification_setting'),
      icon: <AlertOutlined />,
      children: <NotificationSettings />,
    },
    // {
    //   label: translate('Company Logo'),
    //   icon: <FileImageOutlined />,
    //   children: <CompanyLogoSettings />,
    // },
    // {
    //   label: translate('Currency Settings'),
    //   icon: <DollarOutlined />,
    //   children: <MoneyFormatSettings />,
    // },
    // {
    //   label: translate('Finance Settings'),
    //   icon: <CreditCardOutlined />,
    //   children: <PaymentSettings />,
    // },
    // {
    //   label: translate('Crm Settings'),
    //   icon: <FileTextOutlined />,
    //   children: <InvoiceSettings />,
    // },
  ];

  const pageTitle = translate('Settings');

  return <TabsContent content={content} pageTitle={pageTitle} />;
}
