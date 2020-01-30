import { SUBMIT_FORM, START_FETCHING, FETCH_ERROR, FETCH_SUCCESS, DELETE_REQUEST, BEGIN_EDIT, SUBMIT_EDIT } from "../actions";

const initialState = {
  isFetching: false,
  error: "",
  requests: [],
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
    case SUBMIT_FORM:
      return {
        ...state,
        requests: [
          ...state.requests,
          {
            name: action.payload.name.value,
            age: action.payload.age.value,
            height: action.payload.height.value,
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
