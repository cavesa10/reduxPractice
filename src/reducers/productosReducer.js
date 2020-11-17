import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_ERROR,
  AGREGAR_PRODUCTO_EXITO,
  COMENZAR_DESCARGA_PRODUCTO,
  DESCARGAR_PRODUCTOS_ERROR,
  DESCARGAR_PRODUCTOS_EXITO,
  OBTENER_PRODUCTO_ELIMINAR,
  PRODUCTO_ELIMINADO_ERROR,
  PRODUCTO_ELIMINADO_EXITO,
  OBTENER_PRODUCTO_EDITAR,
  PRODUCTO_EDITADO_ERROR,
  PRODUCTO_EDITADO_EXITO,
} from "../types";

// Cada reducer tiene su propio state
const initialState = {
  productos: [],
  error: null,
  loading: false,
  productoeliminar: null,
  productoeditar: null,
};

export default function productosReducer(state = initialState, action) {
  switch (action.type) {
    case AGREGAR_PRODUCTO:
      return {
        ...state,
        loading: action.payload,
      };
    case AGREGAR_PRODUCTO_EXITO:
      return {
        ...state,
        loading: false,
        error: null,
        productos: [...state.productos, action.payload],
      };
    case AGREGAR_PRODUCTO_ERROR:
    case PRODUCTO_ELIMINADO_ERROR:
    case DESCARGAR_PRODUCTOS_ERROR:
    case PRODUCTO_EDITADO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case COMENZAR_DESCARGA_PRODUCTO:
      return {
        ...state,
        loading: action.payload,
        error: null,
      };
    case DESCARGAR_PRODUCTOS_EXITO:
      return {
        ...state,
        loading: false,
        error: null,
        productos: action.payload,
      };
    case OBTENER_PRODUCTO_ELIMINAR:
      return {
        ...state,
        productoeliminar: action.payload,
        error: null,
      };
    case PRODUCTO_ELIMINADO_EXITO:
      return {
        ...state,
        productos: state.productos.filter(
          (producto) => producto.id !== state.productoeliminar
        ),
        productoelminar: null,
        error: null,
      };
    case OBTENER_PRODUCTO_EDITAR:
      return {
        ...state,
        productoeditar: action.payload,
      };
    case PRODUCTO_EDITADO_EXITO:
      return {
        ...state,
        productoeditar: null,
        productos: state.productos.map((producto) =>
          producto.id === action.payload.id
            ? (producto = action.payload)
            : producto
        ),
      };
    default:
      return state;
  }
}
