export default function alterarMax(newNumber: number){
  return{
    type: 'MAX_ALTERADO',
    payload: newNumber
  }
}