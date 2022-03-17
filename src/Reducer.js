import { ADD_ITEM, ADD_COUNTER, DELETE_ITEM ,INCREASE_QTE} from "./actions/type";

export const getBasketTotal =(basket)=>basket?.reduce((amount, item)=>item.price +amount, 0 )

export const initialState = {
  basket: [],
  counter: 0,
};

const userReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case INCREASE_QTE:
     
      return{
        ...state,
        basket:state.basket.map((content)=>content.id === action.id ?{...content, qte: content.qte+1}:content) 

      };
    case ADD_ITEM:
      //logic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      break;

    case DELETE_ITEM:
      //logic for deleting item from basket
      return {
        ...state,
        // basket: state.basket?state.basket.filter((item) => item.id!= action.payload.id)
          // : [],
          basket:state.basket.filter(item=>item.id===action.payload.id)[0].qte>1 ? state.basket.map((content)=>content.id === action.payload.id ?{...content, qte: content.qte-1}:content) : state.basket.filter((item) => item.id!= action.payload.id),
      };
      break;

    default:
      return state;
      break;
  }
};
export default userReducer;
