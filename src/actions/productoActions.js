import { clienteAxios } from "../config/axios";
import Swal from "sweetalert2";
import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_ERROR,
  AGREGAR_PRODUCTO_EXITO,
  COMENZAR_DESCARGA_PRODUCTO,
  DESCARGAR_PRODUCTOS_EXITO,
  DESCARGAR_PRODUCTOS_ERROR,
} from "../types";

// Crear nuevos productos

export function crearNuevoProductoAction(producto) {
  return async (dispatch) => {
    dispatch(agregarProducto());
    try {
      // insertar en la API
      await clienteAxios.post("/productos", producto);

      // Si todo sale bien, actualizar el state
      dispatch(agregarProductoExito(producto));
      // Alerta
      Swal.fire({
        title: "Correcto",
        text: "El Producto se Agregó Correctamente",
        icon: "success",
        timer: 2000,
      });
    } catch (error) {
      console.log(error);
      // Si hay un error cambiar el state
      dispatch(agregarProductoError(true));

      // Alerta de error
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Hubo un error, intenta de nuevo",
        timer: 2000,
      });
    }
  };
}

const agregarProducto = () => ({
  type: AGREGAR_PRODUCTO,
});
// Si el producto se guarda en la base de datos
const agregarProductoExito = (producto) => ({
  type: AGREGAR_PRODUCTO_EXITO,
  payload: producto,
});

// Si hubo un error
const agregarProductoError = (estado) => ({
  type: AGREGAR_PRODUCTO_ERROR,
  payload: estado,
});

// fUNCIón q descarga los productos de la base de datos

export const obtenerProductosAction = () => {
  return async (dispatch) => {
    dispatch(descargarProductos());
    try {
      const respuesta = await clienteAxios.get("/productos");
      dispatch(descargarProductosExtitosa(respuesta.data));
    } catch (error) {
      dispatch(descargarProductosError());
    }
  };
};

const descargarProductos = () => {
  return {
    type: COMENZAR_DESCARGA_PRODUCTO,
    payload: true,
  };
};

const descargarProductosExtitosa = (productos) => {
  return {
    type: DESCARGAR_PRODUCTOS_EXITO,
    payload: productos,
  };
};

const descargarProductosError = () => {
  return {
    type: DESCARGAR_PRODUCTOS_ERROR,
    payload: true
  }
}

