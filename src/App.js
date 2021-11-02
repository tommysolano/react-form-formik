import { useFormik } from "formik"


const validate = (values) => {
  const errors = {}

  if(!values.name){
    errors.name = "requerido"
  } else if (values.name.length < 5) {
    errors.name = "el nombre es muy corto"
  }

  if(!values.lastname){
    errors.lastname = "requerido"
  } else if (values.lastname.length < 5) {
    errors.lastname = "el apellido es muy corto"
  }

  if(!values.name){
    errors.name = "requerido"
  } else if (values.name.length < 5) {
    errors.name = "el nombre es muy corto"
  }
  return errors
}

function App() {

  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: ""
    },
    validate,
    onSubmit: values => console.log(values)
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Nombre</label>
      <input
        name="name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
      <br />
      <label>Apellido</label>
      <input
        name="lastname"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastname}
      />
      {formik.touched.lastname && formik.errors.lastname ? <div>{formik.errors.lastname}</div> : null}
      <br />
      <label>Email</label>
      <input
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
      <br/>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;
