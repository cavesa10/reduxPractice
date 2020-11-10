import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_ERROR,
  AGREGAR_PRODUCTO_EXITO,
  COMENZAR_DESCARGA_PRODUCTO,
  DESCARGAR_PRODUCTOS_ERROR,
  DESCARGAR_PRODUCTOS_EXITO
} from "../types";


// Cada reducer tiene su propio state
const initialState = {
  productos: [],
  error: null,
  loading: false,
};

export default function productosReducer(state = initialState, action) {
  switch (action.type) {
    case AGREGAR_PRODUCTO:
      return {
        ...state,
        loading: true
      }
    case AGREGAR_PRODUCTO_EXITO:
      return{
        ...state,
        loading: false,
        error: false,
        productos: [...state.productos, action.payload]
      }
    case AGREGAR_PRODUCTO_ERROR:
      return{
        ...state,
        loading: false,
        error: action.payload
      }
    case COMENZAR_DESCARGA_PRODUCTO:
      return{
        ...state,
        loading: action.payload
      }
    case DESCARGAR_PRODUCTOS_EXITO:
      return{
        ...state,
        loading: false,
        error: null,
        productos: action.payload
      }
    case DESCARGAR_PRODUCTOS_ERROR:
      return{
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state;
  }
}
