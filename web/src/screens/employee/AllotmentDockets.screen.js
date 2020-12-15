import React, { useState, useEffect } from 'react';
import {
  Col,
  Row,
  Modal,
  Space,
  Popconfirm,
  Input,
  Typography,
  Button,
  Popover,
  notification,
} from 'antd';
import { faTruckLoading ,faMoneyCheck } from  '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import allotmentColumns from 'common/columns/Allotment.column';
import { DeliveredForm } from 'forms/delivered.form';
import { AllotmentMainForm } from 'forms/allotmentMain.form';
import { connect } from 'react-redux';
import { useTableSearch } from 'hooks/useTableSearch';
import { deleteAllotment } from 'common/api/auth';
import { loadAPI } from 'common/helpers/api';
import { DEFAULT_BASE_URL } from 'common/constants/enviroment';
import { useAPI } from 'common/hooks/api';
import { Link, useNavigate } from '@reach/router';
import Delete from 'icons/Delete';
import Edit from 'icons/Edit';
import Delivery from 'icons/Delivery';
import Document from 'icons/Document';
import { BarcodeAllotmentDocket } from 'components/barcodeAllotmentDocket';
import { GetUniqueValue } from 'common/helpers/getUniqueValues';
import { EyeTwoTone,EyeInvisibleOutlined,UserOutlined } from '@ant-design/icons'

import { deleteHOC } from '../../hocs/deleteHoc';
import TableWithTabHOC from '../../hocs/TableWithTab.hoc';
import { LineGraph } from '../../components/graphComponent/lineGraph';

const { Search } = Input;
const { Title } = Typography;
const AllotmentDocketsScreen = ({ currentPage }) => {
  const [searchVal, setSearchVal] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [deliveryId, setDeliveryId] = useState(null);
  const [reqData, setReqData] = useState([]);
  const [TN, setTN] = useState(null);
  const [visible, setVisible] = useState(false);
  const { data: allotments, loading } = useAPI('/allotments-table/', {});
  const { data: count } = useAPI('/mr-count/', {});
  const [altId,setAltId] = useState(null);
  const { filteredData, reload } = useTableSearch({
    searchVal,
    reqData,
  });
  useEffect(() => {
    if (allotments) {
      const reqD = allotments.map((alt) => ({
        id: alt.id,
        transaction_no: alt.transaction_no,
        parent_name: alt.sales_order.owner,
        dispatch_date: alt.dispatch_date,
        warehouse_name: alt.send_from_warehouse,
        model: alt.model,
        vehicle_number: alt.vehicle_number,
        transport_by: alt.transport_by,
        is_delivered: alt.is_delivered,
      }));
      setReqData(reqD);
    }
  }, [allotments]);

  const columns = [
    {
      title: 'Sr. No.',
      key: 'srno',
      render: (text, record, index) => (currentPage - 1) * 10 + index + 1,
    },
    {
      title: 'Transaction No.',
      key: 'transaction_no',
      dataIndex: 'transaction_no',
      sorter: (a, b) => a.transaction_no - b.transaction_no,
    },
    ...allotmentColumns,
    {
      title: 'Parent Company',
      key: 'parent_name',
      dataIndex: 'parent_name',
      filters: GetUniqueValue(filteredData || [],'parent_name'),
      onFilter: (value, record) => record.parent_name === value,
    },
    {
      title: 'Docket',
      key: 'docket',
      render: (text, record) => {
        return (
          <div className='row align-center justify-evenly'>
            <a href={`../docket/${record.transaction_no}`} target='_blank' rel='noreferrer'>
              <FontAwesomeIcon
                icon={faMoneyCheck}
                style={{ fontSize:20 }} />
            </a>
            <FontAwesomeIcon
              className='mx-2 icon-bg'
              icon={faTruckLoading}
              onClick={()=>{
                setTN(record.transaction_no);
                setAltId(record.id);
                setVisible(true);}}
              style={{ fontSize:20 }}
              />
          </div>
        );
      },
    },
    {
      title: 'Action',
      key: 'operation',
      width: '9vw',
      render: (text, record) => (
        <div className='row justify-evenly'>
          {/* <a */}
          {/*  href={`${DEFAULT_BASE_URL  }/delivered-docket/?pk=${record.id}`} */}
          {/*  target='_blank' */}
          {/*  rel='noopener noreferrer' */}
          {/* > */}
          <Button
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              boxShadow: 'none',
              padding: '1px',
            }}
              // disabled={!record.document}
            onClick={async (e) => {
              const { data: req } = await loadAPI(
                `${DEFAULT_BASE_URL}/delivered-docket/?pk=${record.id}`,
                {},
              );
              if (req) if (req.document) {
                window.open(req.document);
              }
              e.stopPropagation();
            }}>
            <Document color={record.document ? '#7CFC00' : null} />
          </Button>
          {/* </a> */}
          <Button
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              boxShadow: 'none',
              padding: '1px',
            }}
            onClick={(e) => {
              setTN(record.transaction_no);
              setDeliveryId(record.id);
              e.stopPropagation();
            }}>
            <Delivery color={record.is_delivered ? '#7CFC00' : null} />
          </Button>
          <Button
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              boxShadow: 'none',
              padding: '1px',
            }}
            onClick={(e) => {
              setEditingId(record.id);
              e.stopPropagation();
            }}>
            <Edit />
          </Button>
          <Popconfirm
            title='Confirm Delete'
            onCancel={(e) => e.stopPropagation()}
            onConfirm={deleteHOC({
              record,
              reload,
              api: deleteAllotment,
              success: 'Deleted Allotment Successfully',
              failure: 'Error in deleting Allotment',
            })}>
            <Button
              style={{
                backgroundColor: 'transparent',
                boxShadow: 'none',
                border: 'none',
                padding: '1px',
              }}
              onClick={(e) => e.stopPropagation()}>
              <Delete />
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  const tabs = [
    {
      name: 'All Allotment Dockets',
      key: 'allAllotmentDockets',
      data: filteredData,
      columns,
      loading,
    },
  ];

  const cancelEditing = () => {
    setEditingId(null);
    setDeliveryId(null);
  };

  const total = 'Total Orders';
  const deliverd = 'Delivered Orders';
  const pending = 'Pending Orders';
  const materialRequest = 'Material Request'
  let deliveredCount = 0;
  // eslint-disable-next-line array-callback-return
  reqData.map((alt) => {
    if (alt.is_delivered) deliveredCount += 1;
  });
  const pendingCount = reqData.length - deliveredCount;
  return (
    <>

      <Row className='mr-auto ml-auto' gutter={24}>
        <Col span={6}>
          <LineGraph {...{ tagName: materialRequest,count,width:230 }} />
        </Col>
        <Col span={6}>
          <LineGraph {...{ tagName: total, count:  reqData.length ,width:230 }} />
        </Col>
        <Col span={6}>
          <LineGraph {...{ tagName: deliverd, count:deliveredCount, width:230 }} />
        </Col>
        <Col span={6}>
          <LineGraph {...{ tagName: pending, count: pendingCount ,width:230 }} />
        </Col>
      </Row>
      <br />
      <Modal
        maskClosable={false}
        visible={visible}
        destroyOnClose
        style={{ minWidth: `80vw` }}
        title={TN}
        onCancel={(e) => {
          setTN(null);
          setDeliveryId(null);
          setVisible(false);
          e.stopPropagation();
        }}
        footer={null}>
        {visible?<BarcodeAllotmentDocket transaction={TN} allot={altId} setVisible={setVisible} />
          :null}
      </Modal>
      <Row>
        <Col span={19}>
          <Title level={3}>Allotment Dockets</Title>
        </Col>
        <Col span={5}>
          <div style={{ width: '15vw', display: 'flex', alignItems: 'flex-end' }}>
            <Search
              onChange={(e) => setSearchVal(e.target.value)}
              placeholder='Search'
              enterButton />
          </div>
        </Col>
      </Row>

      <TableWithTabHOC
        rowKey={(record) => record.id}
        refresh={reload}
        tabs={tabs}
        size='middle'
        title=''
        modalBody={deliveryId ? DeliveredForm : AllotmentMainForm}
        modalWidth={60}
        editingId={editingId || deliveryId}
        formParams={{ transaction_no: TN }}
        cancelEditing={cancelEditing}
        hideRightButton
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return { currentPage: state.page.currentPage };
};

export default connect(mapStateToProps)(AllotmentDocketsScreen);
