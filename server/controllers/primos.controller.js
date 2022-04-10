const primosCtrl = {};

primosCtrl.primosByNumber = async (req, res) => {
  let lastNumber = req.body.number;
  const regex = /^[0-9]*$/; // solo numeros
  if (regex.test(lastNumber)) {
    // entra si es numero
    let primosList = []; // declaramos lista de primos para devolver
    //validamos que el numero entregado sea mayor a 2
    if (lastNumber >= 2) {
      console.log("Buscando numeros primos entre 2 y " + lastNumber);
      for (let i = 2; i <= lastNumber; i++) {
        if (esPrimo(i)) {
          // llamamos a funcion que busca si es primo
          primosList.push(i); // si cumple, agregamos a la lista
        }
      }
      // ordenamos de forma descendiente
      primosList.reverse();
      // entregamos respuesta
      res.json({ result: 1, primos: primosList });
    } else {
      res.json({ result: 0, msg: "numero debe ser mayor o igual a 2" });
    }
  }
};

// creamos una función que verifique si un numero es primo o no
// asumimos que todos los numeros son divisibles por 1 y por si mismos
// entonces buscamos solo entre el 2 y el numero -1
function esPrimo(number) {
  for (let i = 2; i < number; i++) {
    // si se llega a encontrar un número que pueda dividirlo, retorna false
    if (number % i === 0) {
      return false;
    }
  }
  // no encuentra divisibles
  return true;
}

module.exports = primosCtrl;
