import CrudModule from '@/modules/CrudModule/CrudModule';
import CustomerForm from '@/forms/CustomerForm';

import { Button } from 'antd';
import useLanguage from '@/locale/useLanguage';

export default function Customer() {
  const translate = useLanguage();
  const entity = 'customer';

  const searchConfig = {
    displayLabels: ['customer'],
    searchFields: 'customer,customerName',
    outputValue: '_id',
  };

  const entityDisplayLabels = ['customer'];

  const readColumns = [
    {
      title: translate('Company'),
      dataIndex: 'company',
    },
    {
      title: translate('Manager first name'),
      dataIndex: 'managerName',
    },
    {
      title: translate('Manager last name'),
      dataIndex: 'managerSurname',
    },
    {
      title: translate('Email'),
      dataIndex: 'email',
    },
    {
      title: translate('Phone'),
      dataIndex: 'phone',
    },
  ];
  const dataTableColumns = [
    {
      title: translate('Customer Name'),
      dataIndex: 'customer',
    },
    {
      title: translate('Equipment Count'),
      dataIndex: 'equipmentCount',
    },
    {
      title: translate('Primary Contact'),
      dataIndex: 'primaryContact',
    },
    {
      title: translate('Last Activity'),
      dataIndex: 'lastActivity',
    },
  ];

  const Labels = {
    PANEL_TITLE: translate('customer'),
    DATATABLE_TITLE: translate('customer'),
    ADD_NEW_ENTITY: translate('add_new_customer'),
    ENTITY_NAME: translate('customer'),
    CREATE_ENTITY: translate('save'),
    UPDATE_ENTITY: translate('update'),
  };
  const configPage = {
    entity,
    ...Labels,
  };
  const config = {
    ...configPage,
    readColumns,
    dataTableColumns,
    searchConfig,
    entityDisplayLabels,
  };

  return (
    <CrudModule
      createForm={<CustomerForm />}
      updateForm={<CustomerForm isUpdateForm={true} />}
      config={config}
    />
  );
}
