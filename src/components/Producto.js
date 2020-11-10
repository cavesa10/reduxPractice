import React from "react";
import { Link } from "react-router-dom";

export const Producto = ({ producto }) => {
  const { nombre, precio, id } = producto;
  return (
    <tr>
      <td>{nombre}</td>
      <td>
        <span className="font-weight-bold">$ {precio}</span>
      </td>
      <td className="acciones" >
        <Link className="btn btn-primary mr-2" to={`/productos/editar/${id}`}>Editar</Link>
        <button className="btn btn-danger" >Eliminar</button>
      </td>
    </tr>
  );
};
