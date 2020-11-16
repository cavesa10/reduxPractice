import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editarProductoAction } from "../actions/productoActions";
import {useHistory} from 'react-router-dom'

export const EditarProducto = () => {
  const dispatch = useDispatch();
  const history = useHistory()

  // nuevo state de producto
  const [producto, setProducto] = useState({
    nombre: "",
    precio: "",
  });
  // Producto a editar
  const productoEditar = useSelector((state) => state.productos.productoeditar);
  
  // llenar el state
  useEffect(() => {
    setProducto(productoEditar);
  }, [productoEditar]);
  if(!productoEditar){return null}
  const handleOnChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };
  const { nombre, precio} = producto;
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editarProductoAction(producto));
    history.push('/')
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Editar Producto
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre del Producto"
                  name="nombre"
                  value={nombre}
                  onChange={handleOnChange}
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
                  onChange={handleOnChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block  w-100"
              >
                Guardar Cambios
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
