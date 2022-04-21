import { Form, Input, Button, Select } from 'antd';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

export const Formm = (props) => {
  const { 
    name, 
    email, 
    phone, 
    website,
    setName,
    setEmail,
    setPhone,
    setWebsite } = props;

  return (
    <Form 
      {...layout} 
      name="control-hooks" 
    >
      <Form.Item
        name="name"
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input defaultValue={name}  onChange={e => setName(e.target.value)}/>
      </Form.Item>

      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input defaultValue={email} onChange={e => setEmail(e.target.value)}/>
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input defaultValue={phone} onChange={e => setPhone(e.target.value)}/>
      </Form.Item>

      <Form.Item
        name="website"
        label="Website"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input defaultValue={website} onChange={e => setWebsite(e.target.value)}/>
      </Form.Item>
    </Form>
  );
};