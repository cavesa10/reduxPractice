import React from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

// Redux
import { useDispatch } from "react-redux";
import {
  borrarProductoAction,
  productoEditarStateAction,
} from "../actions/productoActions";

export const Producto = ({ producto }) => {
  const { nombre, precio, id } = producto;
  const dispatch = useDispatch();
  const history = useHistory(); // habilitar history para redirección

  //confirmas si desea Eliminar un producto
  const confirmarEliminarProducto = (id) => {
    // preguntar al usuario
    Swal.fire({
      title: "¿Está seguro de eliminar el producto?",
      text: "No podrás recuperar los datos",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Pasarlo al action
        dispatch(borrarProductoAction(id));
      }
    });
  };
  // funcion q redirige de forma programada

  const redireccionarEdicion = (producto) => {
    dispatch(productoEditarStateAction(producto));
    history.push(`/productos/editar/${producto.id}`);
  };

  return (
    <tr>
      <td>{nombre}</td>
      <td>
        <span className="font-weight-bold">$ {precio}</span>
      </td>
      <td className="acciones">
        <button
          className="btn btn-primary mr-2"
          type="button"
          onClick={() => redireccionarEdicion(producto)}
        >
          Editar
        </button>
        <button
          className="btn btn-danger"
          onClick={() => confirmarEliminarProducto(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};
