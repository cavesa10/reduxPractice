import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Producto } from "./Producto";
import { obtenerProductosAction } from "../actions/productoActions";

export const Productos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const cargarProductos = () => dispatch(obtenerProductosAction());
    cargarProductos();
  }, []);
  // Obetener el state
  const productos = useSelector((state) => state.productos.productos);
  const error = useSelector((state) => state.productos.error);
  const loading = useSelector((state) => state.productos.loading);
  return (
    <>
      <h2 className="text-center my-5">Listado de Productos</h2>
      {error ? (
        <p className="font-weight-bold alert alert-danger text-center mt-4">
          Hubo un error
        </p>
      ) : null}
      {loading ? (
        <p className="text-center">
          Cargando ...
        </p>
      ) : null}
      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.length === 0
            ? null
            : productos.map((producto) => (
                <Producto key={producto.id} producto={producto} />
              ))}
        </tbody>
      </table>
    </>
  );
};
