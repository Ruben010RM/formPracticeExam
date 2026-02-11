export default function textNormalize(text) {
  return text
    .toLowerCase()
    .normalize("NFD") // Descompone tildes en caracteres base + marcas
    .replace(/[\u0300-\u036f]/g, "") // Elimina todas las marcas diacríticas
    .trim();
}
