import {createStore, combineReducers} from 'redux'

const reducers = combineReducers({
  numeros: function(state, action){

    switch(action.type){
      case 'MIN_ALTERADO':
        return {
          ...state,
          min: action.payload
        }
      case 'MAX_ALTERADO':
        return {
           ...state,
           max: action.payload
        }
      default:
        return {
          min: 117,
          max: 289
        }
    }
  }
})

function storeConfig(){
  return createStore(reducers)
}

export default storeConfig