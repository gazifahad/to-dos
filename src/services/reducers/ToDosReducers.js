import { GET_TODOS_REQUEST, GET_TODOS_SUCCESS, GET_TODOS_FAILED } from './../contstants/ToDosConstants';

const initialState={

    isLoading:false,
    toDos:[],
    error:null
};
const ToDosReducer=(state=initialState,action)=>{
switch (action.type) {
    case GET_TODOS_REQUEST:
      return {
      ...state,
      isLoading:true
      }
    case GET_TODOS_SUCCESS:
      return {
       isLoading:false,
       toDos:action.payload,
       error:null
      }
    case GET_TODOS_FAILED:
      return {
isLoading:false,
toDos:[],
error:null
      }

    default:
        return state;
}
}
export default ToDosReducer;