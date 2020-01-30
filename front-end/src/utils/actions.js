import axios from 'axios'

export const SUBMIT_FORM = 'SUBMIT_FORM';
export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';
export const DELETE_REQUEST = 'DELETE_REQUEST';
export const BEGIN_EDIT = 'BEGIN_EDIT';
export const SUBMIT_EDIT = 'SUBMIT_EDIT';
export const ADD_REQUEST = 'ADD_REQUEST';

export const submitForm = e => dispatch => {
    e.preventDefault()
    dispatch({ type: SUBMIT_FORM, payload: e.target})
    axios.post('http://localhost:3000/requests', {
        name: e.target.name.value,
        age: e.target.age.value,
        height: e.target.height.value,
        id: Date.now()
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
    
};

export const fetchRequests = () => dispatch => {
    dispatch({ type: START_FETCHING })
    axios.get('http://localhost:3000/requests')
    .then(res => dispatch({type: FETCH_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: FETCH_ERROR, payload: err.response}))
};

export const addRequest = () => dispatch => {
    e.preventDefault();
    axiosWithAuth()
    dispatch({ type: ADD_REQUEST, payload: e.target})
      .post('/api/requests', this.state.requestToAdd)
      .then(res => {
        console.log(res);
        this.props.history.push('/requests');
      })
      .catch(err => console.log(err.response));
  };

export const deleteRequest = id => dispatch => {
    dispatch({type: DELETE_REQUEST, payload: id})
    axios.delete(`http://localhost:3000/requests/${id}`)
    .then(res => dispatch({type: FETCH_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: FETCH_ERROR, payload: err.response}))
};

export const beginEdit = () => dispatch => {
    dispatch({type: BEGIN_EDIT})
};

export const submitEdit = e => dispatch => {
    console.log('event target', e.target)
    e.preventDefault()
    dispatch({type: SUBMIT_EDIT, payload: e.target.id})
    axios.put(`http://localhost:3000/requests/${e.target.id}`, {
        name: e.target.editname.value,
        age: e.target.editage.value,
        height: e.target.editheight.value,
    })
    .then(res => dispatch({type: FETCH_SUCCESS, payload: res.data}))
    .catch(err =>dispatch({type: FETCH_ERROR, payload: err.response}))
};