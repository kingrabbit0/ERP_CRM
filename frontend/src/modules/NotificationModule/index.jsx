import { Tag, Row, Col } from 'antd';
import useLanguage from '@/locale/useLanguage';

import LogTable from './components/LogTable';

export default function NotificationModule() {
  const translate = useLanguage();

  const upcomingTableColumns = [
    {
      title: translate('customer_name'),
      dataIndex: 'customer_name',
    },
    {
      title: translate('equipment_name'),
      dataIndex: ['equipment'],
    },
    {
      title: translate('schedule'),
      dataIndex: ['equipment', 'schedule'],
    },
    {
      title: translate('Status'),
      dataIndex: 'status',
      render: (status) => {
        let color = status === 'Pending' ? 'volcano' : 'green';

        return <Tag color={color}>{translate(status)}</Tag>;
      },
    },
  ];

  const logTableColumns = [
    {
      title: translate('notification_date'),
      dataIndex: 'date',
    },
    {
      title: translate('notifictioin_type'),
      dataIndex: 'type',
    },
    {
      title: translate('customer'),
      dataIndex: 'customer',
    },
    {
      title: translate('equipment'),
      dataIndex: ['equipment'],
    },
    {
      title: translate('contact_person'),
      dataIndex: ['contact'],
    },
    {
      title: translate('Status'),
      dataIndex: 'status',
      render: (status) => {
        let color = status === 'Pending' ? 'volcano' : status === 'Failed' ? 'black' : 'green';

        return <Tag color={color}>{translate(status)}</Tag>;
      },
    },
  ];

  return (
    <>
      <Row gutter={[32, 32]}>
        <Col className="gutter-row w-full" sm={{ span: 32 }} md={{ span: 32 }} lg={{ span: 32 }}>
          <div className="whiteBox shadow pad20" style={{ height: '100%' }}>
            <h3 style={{ color: '#22075e', marginBottom: 5, padding: '0 20px 20px' }}>
              {translate('Notification Logs')}
            </h3>

            <LogTable entity={'invoice'} dataTableColumns={logTableColumns} />
          </div>
        </Col>
      </Row>
      <div className="space30"></div>
      <Row gutter={[32, 32]}>
        <Col className="gutter-row w-full" sm={{ span: 32 }} md={{ span: 32 }} lg={{ span: 32 }}>
          <div className="whiteBox shadow pad20" style={{ height: '100%' }}>
            <h3 style={{ color: '#22075e', marginBottom: 5, padding: '0 20px 20px' }}>
              {translate('Upcoming Calibrations')}
            </h3>

            <LogTable entity={'invoice'} dataTableColumns={upcomingTableColumns} />
          </div>
        </Col>
      </Row>
    </>
  );
}
