import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { crearNuevoProductoAction } from "../actions/productoActions";

export const NuevoProducto = ({history}) => {
  // state del componente
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState();

  // utilizar use dispatch y te crea una funcion
  const dispatch = useDispatch();

  // Acceder al state del store
  const error = useSelector((state) => state.productos.error);

  // Manda llamar el action de productoAction
  const agregarProducto = (producto) =>
    dispatch(crearNuevoProductoAction(producto));

  // Cuando el usuario haga submit
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // Validar Formulario
    if (nombre.trim() === "" || precio <= 0) {
      return;
    }

    // Si no hay errores

    // Crear el nuevo producto
    agregarProducto({
      nombre,
      precio,
    });
    // Redireccionar
    history.push('/')
  };
  const handleClick = () => {
    document.getElementById("precio").select();
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar Nuevo Producto
            </h2>
            <form onSubmit={handleOnSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Precio Producto</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio Producto"
                  name="precio"
                  value={precio}
                  id="precio"
                  onChange={(e) => setPrecio(Number(e.target.value))}
                  onClick={() => handleClick()}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block  w-100"
              >
                Agregar
              </button>
            </form>
            {error ? (
              <p className="alert alert-danger p2 mt-4 text-center">Hubo un erro</p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
