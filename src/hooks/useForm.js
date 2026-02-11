import { useState } from "react";

const INIT_FORM = {
  nombre: "",
  edad: "",
  direccion: "",
  telefono: "",
  clase: "",
  alergenos: [],
};
const INIT_FORM_ERRORS = {
  nombre: "",
  edad: null,
  direccion: "",
  telefono: "",
  clase: "",
};

export default function useForm() {
  const [formData, setFormData] = useState(INIT_FORM);
  const [formErrores, setFormErrors] = useState(INIT_FORM_ERRORS);

  function validarNombre(texto) {
    if (!texto.trim()) return "El nombre es obligatorio";
    if (texto.length < 3 || texto.length > 50)
      return "El nombre debe contar con entre 3 y 50 caracteres";
    return null;
  }

  function validarEdad(edad) {
    if (!edad) return "La edad es obligatoria";
    if (edad < 3 || edad > 5) return "La edad debe estar entre 3 y 5 años.";
    return null;
  }

  function validarDireccion(direccion) {
    if (!direccion.trim()) return "La direccion es obligatoria";
    if (direccion.length > 50)
      return "La direccion debe contar con un maximo de 50 caracteres.";
    return null;
  }
  function validarClase(clase) {
    if (!clase) return "Elige alguna de las clases";
    if (clase !== "rosas" && clase !== "girasoles" && clase !== "cerezos")
      return "Elige una clase valida";
    return null;
  }

  //Maneja los cambios de todos los elementos
  function handleChange(e) {
    //El target nos devuelve el name del elemento activador y el value dado
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  //Al enviar creamos array local con los errores que existan
  function handleSubmit(e) {
    e.preventDefault();
    const nuevosErrores = {
      nombre: validarNombre(formData.nombre),
      edad: validarEdad(formData.edad),
      direccion: validarDireccion(formData.direccion),
      clase: validarClase(formData.clase),
    };
    //Convierte el objeto local en un array con solo los valores de los errores, coge solo aquellos distintos a null
    const erroresFiltrados = Object.values(nuevosErrores).filter(
      (el) => el && el !== "",
    );
    console.log(erroresFiltrados);

    //Si este array de valores es mayor que 0 significa q hay errores, asi que los seteamos
    if (erroresFiltrados.length > 0) {
      setFormErrors(erroresFiltrados);

      return;
    }
    alert("Formulario enviado");
  }

  //Tenemos una clase base y en base a un elemento falsy que tenemos al validar el campos que le pasemos, vemos si es invalido(distinto a null) o no,
  //Si es null retornamos clase base, si no la clase invalida
  function handleClassErrors(field, validator) {
    const baseClase =
      "w-full p-3 border rounded-lg border-gray-300 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

    const isInvalid = validator(formData[field]);
    if (formData[field].length === 0) {
      return baseClase;
    } else if (isInvalid) {
      return (
        baseClase +
        " border-red-500 bg-red-50 focus:ring-2 focus:ring-red-200 focus:ring-red-100"
      );
    } else {
      return (
        baseClase +
        " border-green-500 bg-green-50 focus:ring-2 focus:ring-green-200 focus:ring-green-100"
      );
    }
  }

  return {
    formData,
    formErrores,
    validarNombre,
    validarEdad,
    validarDireccion,
    validarClase,
    handleChange,
    handleClassErrors,
    handleSubmit,
  };
}
