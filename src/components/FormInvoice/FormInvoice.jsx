import React from "react";
import { Container } from "react-bootstrap";
import {
  Form,
  Input,
  InputNumber,
  Cascader,
  Select,
  DatePicker,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from "antd";

const config = {
  rules: [
    {
      type: 'object',
      required: true,
      message: 'Please select time!',
    },
  ],
};

const areas = [
  { label: 'Beijing', value: 'Beijing' },
  { label: 'Shanghai', value: 'Shanghai' },
];

const { RangePicker } = DatePicker;

const { Option } = Select;

const FormInvoice = () => {

  const [form] = Form.useForm();
  
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleChange = () => {
    form.setFieldsValue({ sights: [] });
  };

  return (
    <Container
    id="add-invoice"
    className="d-flex justify-content-center align-items-center"
    style={{ minHeight: "100vh" }}
  >
    <div className="w-100" style={{ maxWidth: "400px" }}>
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
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item name="date-picker" label="DatePicker" {...config}>
          <DatePicker />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>

        <Form.Item name="area" label="Area" rules={[{ required: true, message: 'Missing area' }]}>
          <Select options={areas} onChange={handleChange} />
        </Form.Item>
      </Form>
    </div>
    </Container>
  );
};

export default FormInvoice;
