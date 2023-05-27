const { read } = require("./read");
const { write } = require("./writejson");

function create(titulo, descripcion) {
  const data = read();
  const nuevaTarea = { titulo, descripcion };
  data.push(nuevaTarea);
  write(data);
  return console.log("creado con exito");
}

module.exports = { create };
