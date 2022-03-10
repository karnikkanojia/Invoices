import React, { useState } from "react";
import { Container, Alert } from "react-bootstrap";
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';

import { useAuth } from "../../contexts/AuthContext";
import {
  Form,
  Input,
  InputNumber,
  Select,
  DatePicker,
  Button,
} from "antd";

import { Timestamp } from "firebase/firestore";

const config = {
  rules: [
    {
      type: 'object',
      required: true,
      message: 'Please select time!',
    },
  ],
};

const status = [
  { label: 'Paid', value: 'paid' },
  { label: 'Pending', value: 'pending' },
];

const FormInvoice = () => {
  const { getEmail } = useAuth();
  const collectionRef = collection(db, 'Bills');
  const [ error, setError] = useState('');

  const emailNow = getEmail();
  const onFinish = async (values) => {
    try {
      await addDoc(collectionRef, {
        name: values.name,
        time: Timestamp.fromDate(new Date(values['date-picker'].format('MMMM D, YYYY'))),
        amount: values.amount,
        status: values.status,
        email: emailNow
      });
      console.log({
        name: values.name,
        time: Timestamp.fromDate(new Date(values['date-picker'].format('MMMM D, YYYY'))),
        amount: values.amount,
        status: values.status,
        email: emailNow
      });
      window.location.reload();
    }
    catch(err) {
      console.log(err);
      setError('New Invoice not created');
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Container
    id="add-invoice"
    className="d-flex justify-content-center align-items-center"
    >
    <div className="w-100" style={{ maxWidth: "400px" }}>
      <div className="d-flex justify-content-center mb-4"><strong style={{ fontSize: '20px' }}>Insert Invoice</strong></div>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input name of person!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Amount (in $)"
          name="amount"
          rules={[{ required: true, message: "Please input the amount!" }]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item name="date-picker" label="DatePicker" {...config}>
          <DatePicker />
        </Form.Item>

        <Form.Item name="status" label="Status" rules={[{ required: true, message: 'Missing Status' }]}>
          <Select options={status} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" style={{background: "rgb(115, 93, 245)", border: 'white'}}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
    </Container>
  );
};

export default FormInvoice;
