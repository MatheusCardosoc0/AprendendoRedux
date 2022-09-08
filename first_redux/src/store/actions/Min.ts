export default function alterarMin(newNumber: number){
  return{
    type: 'MIN_ALTERADO',
    payload: newNumber
  }
}