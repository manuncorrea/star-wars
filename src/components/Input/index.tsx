import { Col, Form } from 'react-bootstrap';

export function Input({ ...rest }) {
  return (
    <>
      <Form.Group className="mb-3" controlId="formPlaintextEmail">
        <Col xs="12">
          <Form.Control {...rest} />
        </Col>
      </Form.Group>
    </>
  )
}