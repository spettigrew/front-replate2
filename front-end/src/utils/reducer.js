import { SUBMIT_BUSINESS_FORM, SUBMIT_VOLUNTEER_FORM, START_FETCHING, FETCH_ERROR, FETCH_SUCCESS, DELETE_REQUEST, BEGIN_EDIT, SUBMIT_EDIT, ADD_REQUEST } from './actions';

const initialState = {
  isFetching: false,
  error: "",
  requests: [],
  businesssignup: [],
  volunteersignup: [],
  isEditing: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: "",
        requests: [...action.payload]
      };
    case FETCH_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
        requests: [...state.requests]
      };
    case SUBMIT_BUSINESS_FORM:
      return {
        ...state,
        requests: [
          ...state.businesssignup,
          {
            username: action.payload.username.value,
            name: action.payload.name.value,
            address: action.payload.address.value,
            phonenumber: action.payload.phonenumber.value, 
            email: action.payload.email.value,
            id: Date.now()
          }
        ]
      };

      case SUBMIT_VOLUNTEER_FORM:
      return {
        ...state,
        requests: [
          ...state.volunteersignup,
          {
            username: action.payload.username.value,
            name: action.payload.name.value,
            phonenumber: action.payload.phonenumber.value, 
            id: Date.now()
          }
        ]
      };

    case ADD_REQUEST:
      return{
        ...state,
        requests: state.requests.filter(item => item.id !== action.payload)
      }

      case DELETE_REQUEST:
      return{
        ...state,
        requests: state.requests.filter(item => item.id !== action.payload)
      }
      
    case BEGIN_EDIT:
      return{
        ...state,
        isEditing: true
      }

    case SUBMIT_EDIT:
      return{
        ...state,
        isEditing: false
      }

    default:
      return state;
  }
};

export default reducer;
