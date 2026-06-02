import React, {useReducer, useState} from 'react';
// PASO 2: Definir el estado inicial del formulario
const initialState = {
  nombre: '',
  email: '',
  mensaje: '',
};
// PASO 3: Definir estado para errores de validación
const erroresIniciales = { nombre: '', email: '', mensaje: '' };
const contactFormReducer = (state, action) => {
  switch (action.type) {
    case 'ACTUALIZAR_CAMPO':
      return {
        ...state,
        [action.campo]: action.valor,
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};
const ContactPage = () => {
  // PASO 4: Usar useReducer para manejar el formulario
  // PASO 5: Usar useState para errores y estado de envío
  const [formulario, dispatch] =
  useReducer(
    contactFormReducer,
    initialState
  );
const [errores, setErrores] =
  useState(erroresIniciales);
const [enviado, setEnviado] =
  useState(false);
  // PASO 6: Función de validación (como en FormulariosValidacionCompleta)
  const validar = () => {
  const nuevosErrores = {};
  if (!formulario.nombre.trim()) {
    nuevosErrores.nombre =
      "El nombre es obligatorio";
  }
  if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/
      .test(formulario.email)
  ) {
    nuevosErrores.email =
      "Email inválido";
  }
  if (
    formulario.mensaje.trim().length < 10
  ) {
    nuevosErrores.mensaje =
      "Debe tener al menos 10 caracteres";
  }
  setErrores(nuevosErrores);
  return (
    Object.keys(nuevosErrores)
      .length === 0
  );
};
  // PASO 7: Handler del submit con validación
  const handleChange = (e) => {
  dispatch({
    type: "ACTUALIZAR_CAMPO",
    campo: e.target.name,
    valor: e.target.value,
  });
};
  // PASO 8: Handler onChange para dispatch
  const handleSubmit = (e) => {
  e.preventDefault();
  if (validar()) {
  console.log(
    "Formulario enviado:",
    formulario
  );
  setEnviado(true);
  dispatch({
    type: "RESET",
  });
  setErrores(erroresIniciales);
  setTimeout(() => {
    setEnviado(false);
  }, 3000);
}
};
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <h2 className="mb-4">Contacto</h2>

        {/* PASO 9: Renderizado condicional del mensaje de éxito */}
        {enviado && (
  <div className="alert alert-success">
    ¡Mensaje enviado correctamente!
  </div>
)}
        {/* PASO 10: Formulario con inputs controlados por useReducer */}
        <form onSubmit={handleSubmit} >
          <div className="mb-3">
            <label className="form-label" htmlFor="nombre">Nombre</label>
            <input
  type="text"
  className={`form-control ${
    errores.nombre
      ? "is-invalid"
      : ""
  }`}
  id="nombre"
  name="nombre"
  value={formulario.nombre}
  onChange={handleChange}
  onBlur={validar}
/>
{errores.nombre && (
  <div className="invalid-feedback">
    {errores.nombre}
  </div>
)}
  </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">Email</label>
            <input
  type="email"
  className={`form-control ${
    errores.email
      ? "is-invalid"
      : ""
  }`}
  id="email"
  name="email"
  value={formulario.email}
  onChange={handleChange}
  onBlur={validar}
/>
{errores.email && (
  <div className="invalid-feedback">
    {errores.email}
  </div>
)}
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="mensaje">Mensaje</label>
      <textarea
  className={`form-control ${
    errores.mensaje ? "is-invalid" : ""
  }`}
  id="mensaje"
  name="mensaje"
  rows="4"
  value={formulario.mensaje}
  onChange={handleChange}
  onBlur={validar}
  />
{errores.mensaje && (
  <div className="invalid-feedback">
    {errores.mensaje}
  </div>
)}
</div>
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
          <button type="button" className="btn btn-secondary ms-2" 
          onClick={() => {
  dispatch({ type: "RESET" });
  setErrores(erroresIniciales);
  setEnviado(false);
}}>
            Limpiar
          </button>
        </form>
      </div>
    </div>
  );
};
export default ContactPage;