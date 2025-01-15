import CrudModule from '@/modules/CrudModule/CrudModule';
import EquipmentForm from '@/forms/EquipmentForm';

import { Button } from 'antd';
import useLanguage from '@/locale/useLanguage';

export default function Equipment() {
  const translate = useLanguage();
  const entity = 'client';

  const searchConfig = {
    displayLabels: ['equipment'],
    searchFields: 'equipment',
    outputValue: '_id',
  };

  const entityDisplayLabels = ['equipment'];

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
      title: translate('Equipment Name'),
      dataIndex: 'name',
    },
    {
      title: translate('Serial Number'),
      dataIndex: 'serialNumber',
    },
    {
      title: translate('Customer Name'),
      dataIndex: 'customerName',
    },
    {
      title: translate('Calibration Interval'),
      dataIndex: 'calibrationInterval',
    },
    {
      title: translate('Calibration Next Date'),
      dataIndex: 'calibrationNextDate',
    },
    {
      title: translate('Contact Person'),
      dataIndex: 'assignedPerson',
    },
    {
      title: translate('Edit'),
      onCell: () => {
        return {
          props: {
            style: {
              width: '60px',
            },
          },
        };
      },
      render: () => {
        return (
          <Button
            color={'primary'}
            variant={'solid'}
            disabled={false}
            onClick={() => {
              console.log('onClick button');
            }}
          />
        );
      },
    },
  ];

  const Labels = {
    PANEL_TITLE: translate('equipment'),
    DATATABLE_TITLE: translate('equipment_list'),
    ADD_NEW_ENTITY: translate('add_new_equipment'),
    ENTITY_NAME: translate('equipment'),
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
      createForm={<EquipmentForm />}
      updateForm={<EquipmentForm isUpdateForm={true} />}
      config={config}
    />
  );
}
