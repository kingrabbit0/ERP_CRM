import { Tag, Row, Col } from 'antd';
import useLanguage from '@/locale/useLanguage';

import { useMoney } from '@/settings';

import { request } from '@/request';
import useFetch from '@/hooks/useFetch';

import RecentTable from './components/RecentTable';

import SummaryCard from './components/SummaryCard';
import CustomerPreviewCard from './components/CustomerPreviewCard';

export default function DashboardModule() {
  const translate = useLanguage();
  const { moneyFormatter } = useMoney();
  const { result: invoiceResult, isLoading: invoiceLoading } = useFetch(() =>
    request.summary({ entity: 'invoice' })
  );

  const { result: quoteResult, isLoading: quoteLoading } = useFetch(() =>
    request.summary({ entity: 'quote' })
  );

  const { result: offerResult, isLoading: offerLoading } = useFetch(() =>
    request.summary({ entity: 'offer' })
  );

  // const { result: paymentResult, isLoading: paymentLoading } = useFetch(() =>
  //   request.summary({ entity: 'payment' })
  // );

  const { result: clientResult, isLoading: clientLoading } = useFetch(() =>
    request.summary({ entity: 'client' })
  );

  const notificationTableColumns = [
    {
      title: translate('contact_person'),
      dataIndex: 'person',
    },
    {
      title: translate('equipment'),
      dataIndex: 'equipment',
    },
    {
      title: translate('notification_date'),
      dataIndex: 'timestamp',
    },
  ];

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
      title: translate('serial_number'),
      dataIndex: ['equipment', 'serial'],
    },
    {
      title: translate('calibration_due_date'),
      dataIndex: ['equipment', 'serial', 'due_date'],
    },
    {
      title: translate('contact_person'),
      dataIndex: ['equipment', 'serial', 'person'],
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

  const entityData = [
    {
      result: invoiceResult,
      isLoading: invoiceLoading,
      entity: 'active_customer',
      prefix: 'active_customer',
    },
    {
      result: quoteResult,
      isLoading: quoteLoading,
      entity: 'equipment_total',
      prefix: 'equipment',
    },
    {
      result: offerResult,
      isLoading: offerLoading,
      entity: 'calibration_upcoming',
      prefix: 'calibration_upcoming',
    },
  ];

  const cards = entityData.map((data, index) => {
    const { result, entity, isLoading, prefix } = data;

    if (entity === 'offer') return null;

    return (
      <SummaryCard
        key={index}
        title={data?.entity === 'payment' ? translate('Payment') : translate(data?.entity)}
        tagColor={
          data?.entity === 'active_customer'
            ? 'cyan'
            : data?.entity === 'equipment_total'
            ? 'purple'
            : 'green'
        }
        prefix={translate(prefix)}
        isLoading={isLoading}
        tagContent={result?.total && moneyFormatter({ amount: result?.total })}
      />
    );
  });

  return (
    <>
      <Row gutter={[32, 32]}>{cards}</Row>
      <div className="space30"></div>
      <Row gutter={[32, 32]}>
        <Col className="gutter-row w-full" sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 18 }}>
          <div className="whiteBox shadow pad20" style={{ height: '100%' }}>
            <h3 style={{ color: '#22075e', marginBottom: 5, padding: '0 20px 20px' }}>
              {translate('Notification')}
            </h3>

            <RecentTable entity={'notification'} dataTableColumns={notificationTableColumns} />
          </div>
        </Col>
        <Col className="gutter-row w-full" sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 6 }}>
          <CustomerPreviewCard
            isLoading={clientLoading}
            activeCustomer={clientResult?.active}
            newCustomer={clientResult?.new}
          />
        </Col>
      </Row>
      <div className="space30"></div>
      <Row gutter={[32, 32]}>
        <Col className="gutter-row w-full" sm={{ span: 32 }} md={{ span: 32 }} lg={{ span: 32 }}>
          <div className="whiteBox shadow pad20" style={{ height: '100%' }}>
            <h3 style={{ color: '#22075e', marginBottom: 5, padding: '0 20px 20px' }}>
              {translate('Upcoming Calibrations')}
            </h3>

            <RecentTable entity={'upcoming'} dataTableColumns={upcomingTableColumns} />
          </div>
        </Col>
      </Row>
    </>
  );
}
