import {
 GET_REQUESTS,
 ADD_REQUEST,
 DELETE_REQUEST,
 UPDATE_REQUEST,
 SET_BUSINESS_ID
} from "../utils/types";

const initialState = {
 username: "",
 password: "",
 name: "",
 address: "",
 phone: "",
 email: "",
 business_id: ""
};

export default (state = initialState, action) => {
 switch (action.type) {
  case GET_REQUESTS:
   return {
    ...state,
    requests: action.payload
   };
  case ADD_REQUEST:
   return {
    ...state,
    requests: [...state.requests, action.payload]
   };
  case DELETE_REQUEST:
   return {
    ...state,
    requests: state.requests.filter(request => request.id !== action.payload)
   };
  case UPDATE_REQUEST:
   return {
    ...state,
    requests: state.requests.map(request =>
     request.id === action.payload.id ? action.payload : request
    )
   };
    case SET_BUSINESS_ID:
      return {
        ...state,
        business_id: action.payload
      }
  default:
   return state;
 }
};
