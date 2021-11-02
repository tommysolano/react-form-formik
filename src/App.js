import { Formik, Form, Field, ErrorMessage } from "formik"
import TextInput from "./components/TextInput"
import Checkbox from "./components/Checkbox"
import Select from "./components/Select"
import Radio from "./components/Radio"



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

  if(!values.radio) {
    errors.radio = "requerido"
  }

  return errors
}

function App() {

  return (
    <Formik
      initialValues={{ name: "", lastname: "", email: "", chancho: "", radio:"" }}
      validate={validate}
      onSubmit={values => console.log(values)}
    >

      <Form>
        <TextInput name="name" label="Nombre"/>
        <br />
        <TextInput name="lastname" label="Apellido"/>
        <br />
        <TextInput name="email" label="Correo"/>
        <br />
        <Select label="Tipo de chancho" name="chancho">
          <option value="" >Seleccione chancho</option>
          <option value="felipe" >felipe</option>
          <option value="chanchitofeliz" >chanchitofeliz</option>
          <option value="chanchitotriste" >chanchitotriste</option>
        </Select>
        <br />
        <Checkbox name="accept">
          Aceptar terminos y condiciones
        </Checkbox>
        <br/>
        <Radio name="radio" value="chanchito1" label="chanchito1"/>
        <Radio name="radio" value="chanchito2" label="chanchito2"/>
        <Radio name="radio" value="chanchito3" label="chanchito3"/>
        <ErrorMessage name="radio" />
        <button type="submit">Enviar</button>
      </Form>
    </Formik>
  );
}

export default App;
