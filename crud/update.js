const { read } = require("./read");
const { write } = require("./writejson");

const update = (tituloBuscar, nuevaDescripcion) => {
  const data = read();
  const arrayEditado = data.map((tarea) => {
    if (tarea.titulo === tituloBuscar) {
      return { titulo: tituloBuscar, descripcion: nuevaDescripcion };
    }
    return tarea;
  });
  write(arrayEditado);
  return console.log("Actualizado con exito");
};

module.exports = { update };
