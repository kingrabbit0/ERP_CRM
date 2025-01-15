import SetingsSection from '../components/SetingsSection';
import UpdateSettingModule from '../components/UpdateSettingModule';
// import GeneralSettingForm from './forms/GeneralSettingForm';
import CalibrationSettingForm from './forms/CalibrationSettingForm';
// import useLanguage from '@/locale/useLanguage';

export default function GeneralSettingsModule({ config }) {
  // const translate = useLanguage();
  return (
    <UpdateSettingModule config={config}>
      <SetingsSection
      // title={translate('Company')}
      // description={translate('Update your company informations')}
      >
        <CalibrationSettingForm />
      </SetingsSection>
    </UpdateSettingModule>
  );
}
