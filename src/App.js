import { Formik, Form, Field, ErrorMessage } from "formik"
import TextInput from "./components/TextInput"
import Checkbox from "./components/Checkbox"


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
        <TextInput name="name" label="Nombre"/>
        <br />
        <label>Apellido</label>
        <Field type="text" name="lastname"/>
        <ErrorMessage name="lastname" />
        <br />
        <label>Email</label>
        <Field type="email" name="email"/>
        <ErrorMessage name="email" />
        <br />
        <Checkbox name="accept">
          Aceptar terminos y condiciones
        </Checkbox>
        <button type="submit">Enviar</button>
      </Form>
    </Formik>
  );
}

export default App;
