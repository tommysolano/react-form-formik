import { Formik, Form, Field, ErrorMessage } from "formik"


const validate = (values) => {
  const errors = {}

  if (!values.name) {
    errors.name = "requerido"
  } else if (values.name.length < 5) {
    errors.name = "el nombre es muy corto"
  }

  if (!values.lastname) {
    errors.lastname = "requerido"
  } else if (values.lastname.length < 5) {
    errors.lastname = "el apellido es muy corto"
  }

  if (!values.name) {
    errors.name = "requerido"
  } else if (values.name.length < 5) {
    errors.name = "el nombre es muy corto"
  }
  return errors
}

function App() {

  return (
    <Formik
      initialValues={{ name: "", lastname: "", email: "" }}
      validate={validate}
      onSubmit={values => console.log(values)}
    >

      <Form>
        <label>Nombre</label>
        <Field type="text" name="name"/>
        <Field name="select" as="select" className="input">
          <option value="chanchitofeliz">Chanchito feliz</option>
          <option value="chanchitofeli">Chanchito feliz</option>
        </Field>
        <ErrorMessage name="name" />
        <br />
        <label>Apellido</label>
        <Field type="text" name="lastname"/>
        <ErrorMessage name="lastname" />
        <br />
        <label>Email</label>
        <Field type="email" name="email"/>
        <ErrorMessage name="email" />
        <br />
        <button type="submit">Enviar</button>
      </Form>
    </Formik>
  );
}

export default App;
