import {createStore, combineReducers} from 'redux'

const reducers = combineReducers({
  numeros: function(state, action){
    return{
      min: 117,
      max: 289
    }
  }
})

function storeConfig(){
  return createStore(reducers)
}

export default storeConfig