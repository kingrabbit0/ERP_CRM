import { useEffect, useRef, useState } from 'react';
import { Row, Col, Button } from 'antd';
import { useSelector } from 'react-redux';

import dayjs from 'dayjs';

import { useCrudContext } from '@/context/crud';
import { selectCurrentItem } from '@/redux/crud/selectors';
import { valueByString } from '@/utils/helpers';
import useLanguage from '@/locale/useLanguage';

export default function ReadItem({ config }) {
  let { readColumns } = config;
  const { result: currentResult } = useSelector(selectCurrentItem);
  const { state } = useCrudContext();
  const { isReadBoxOpen } = state;
  const [listState, setListState] = useState([]);
  const translate = useLanguage();

  const isFirstRun = useRef(true);
  useEffect(() => {
    // if (isFirstRun.current) {
    //   isFirstRun.current = false;
    //   return;
    // }

    const list = [];
    readColumns.map((props) => {
      const propsKey = props.dataIndex;
      const propsTitle = props.title;
      const isDate = props.isDate || false;
      const isInterval = propsKey == 'interval';
      let value = valueByString(currentResult, propsKey);
      value = isDate ? dayjs(value).format('DD/MM/YYYY') : value;
      value = isInterval
        ? value == '6'
          ? '6 '+ translate('Month') + 's'
          : value == '12'
          ? '1 '+ translate('Year')
          : value == '24'
          ? '2 '+ translate('Year') + 's'
          : value == '48'
          ? '4 '+ translate('Year') + 's'
          : ''
        : value;
      value = propsKey == 'service' ? (value == 'false' ? 'No' : 'Yes') : value;
      list.push({ propsKey, label: propsTitle, value: value });
    });
    setListState(list);
  }, [currentResult]);

  const show = isReadBoxOpen ? { display: 'block', opacity: 1 } : { display: 'none', opacity: 0 };

  const itemsList = listState.map((item) => {
    return (
      <Row key={item.propsKey} gutter={12}>
        <Col className="gutter-row" span={8}>
          <p>{item.label}</p>
        </Col>
        <Col className="gutter-row" span={2}>
          <p> : </p>
        </Col>
        <Col className="gutter-row" span={14}>
          <p>{item.value}</p>
        </Col>
      </Row>
    );
  });

  return <div style={show}>{itemsList}</div>;
}
