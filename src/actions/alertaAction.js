import {MOSTRAR_ALERTA, OCULTAR_ALERTA} from '../types'

export const mostrarAlerta = (alerta) => {
  return (dispatch) => {
    dispatch(crearAlerta(alerta))
  }
}

const crearAlerta = (alerta) => ({
  type: MOSTRAR_ALERTA,
  payload: alerta
})

export const ocultarAlertaAction = () => {
  return (dispatch) => {
    dispatch(oculatarAlerta())
  }
}

const oculatarAlerta = (alerta) => ({
  type: OCULTAR_ALERTA,
  payload: null
})
