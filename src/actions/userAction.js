import { ADD_ITEM, ADD_COUNTER, DELETE_ITEM, GET_FIREBASE} from './type'


export const addHome =(data)=>dispatch=>{
    dispatch({
        type:ADD_ITEM,
        payload:data
    }
    )
}

export const addCounter =(data)=>dispatch=>{
      dispatch({
          type:ADD_COUNTER,
          payload:data
      }
      )
  }

  export const Delete =(data)=>dispatch=>{
    dispatch({
        type:DELETE_ITEM,
        payload:data
    }
    )
}