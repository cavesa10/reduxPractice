import {combineReducers} from 'redux'
import productosReducer from './productosReducer'
import {alertaReducer} from './alertaReducers'

export default combineReducers({
  productos: productosReducer,
  alertas: alertaReducer
})