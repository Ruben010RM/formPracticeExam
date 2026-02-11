export function validarNombre(texto) {
  if (!texto.trim()) return "El nombre es obligatorio";
  if (texto.length < 3 || texto.length > 50)
    return "El nombre debe contar con entre 3 y 50 caracteres";
  return null;
}

export function validarEdad(edad) {
  if (!edad) return "La edad es obligatoria";
  if (edad < 3 || edad > 5) return "La edad debe estar entre 3 y 5 años.";
  return null;
}

export function validarDireccion(direccion) {
  if (!direccion.trim()) return "La direccion es obligatoria";
  if (direccion.length > 50)
    return "La direccion debe contar con un maximo de 50 caracteres.";
  return null;
}
export function validarClase(clase) {
  if (!clase) return "Elige alguna de las clases";
  if (clase !== "rosas" && clase !== "girasoles" && clase !== "cerezos")
    return "Elige una clase valida";
  return null;
}
