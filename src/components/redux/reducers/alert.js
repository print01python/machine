// Importa dos constantes llamadas SET_ALERT y REMOVE_ALERT desde el archivo "../actions/types".
import { SET_ALERT, REMOVE_ALERT } from "../actions/types";

// Define un estado inicial para el reducer de alertas. Inicialmente, no hay ninguna alerta, por lo que alert se establece en null.
const initialState = {
  alert: null,
};

// Define y exporta un reducer para manejar acciones relacionadas con alertas. El reducer toma dos parámetros: estado actual y acción.
export default function alert(state = initialState, action) {
  // Extrae el tipo y la carga útil (payload) de la acción.
  const { type, payload } = action;

  // Utiliza un switch para manejar diferentes tipos de acciones.
  switch (type) {
    // Si el tipo de acción es SET_ALERT, devuelve un nuevo estado que incluye la alerta especificada en la carga útil.
    case SET_ALERT:
      return {
        ...state, // Mantiene el estado actual
        alert: payload, // Actualiza la alerta con el valor de la carga útil
      };
    // Si el tipo de acción es REMOVE_ALERT, devuelve un nuevo estado con alert establecido en null, eliminando así la alerta.
    case REMOVE_ALERT:
      return {
        ...state, // Mantiene el estado actual
        alert: null, // Elimina la alerta al establecerla en null
      };
    // Si la acción no coincide con ningún caso, simplemente devuelve el estado actual sin realizar cambios.
    default:
      return state;
  }
}
