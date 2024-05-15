import { Form } from 'react-router-dom';

export default function Contact() {
  return (
    <div id="contact">
      <div>
        <Form action="edit">
          <button type="submit">Edit</button>
        </Form>
        <Form>
          <button type="submit">Delete</button>
        </Form>
      </div>
    </div>
  );
}
