import axios from 'axios'

export const SUBMIT__BUSINESS_FORM = 'SUBMIT_BUSINESS_FORM';
export const SUBMIT__VOLUNTEER_FORM = 'SUBMIT_VOLUNTEER_FORM';
export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';
export const DELETE_REQUEST = 'DELETE_REQUEST';
export const BEGIN_EDIT = 'BEGIN_EDIT';
export const SUBMIT_EDIT = 'SUBMIT_EDIT';
export const ADD_REQUEST = 'ADD_REQUEST';

export const submitBusinessForm = e => dispatch => {
    e.preventDefault()
    dispatch({ type: SUBMIT_FORM, payload: e.target})
    axiosWithAuth()
        .post('api/businesssignup', {
            username: e.target.username.value,
            name: e.target.name.value,
            address: e.target.address.value,
            phonenumber: e.target.phonenumber.value,
            email: e.target.email.value,
            id: Date.now()
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))     
};

export const submitVolunteerForm = e => dispatch => {
    e.preventDefault()
    dispatch({ type: SUBMIT_FORM, payload: e.target})
    axiosWithAuth()
        .post('/volunteersignup', {
            username: e.target.username.value,
            name: e.target.name.value,
            phonenumber: e.target.phonenumber.value,
            id: Date.now()
        })
        .then(res => console.log(res))
        .catch(err => console.log(err)) 
};

export const fetchRequests = () => dispatch => {
    dispatch({ type: START_FETCHING })
    axiosWithAuth()
        .get('api/requests')
        .then(res => dispatch({type: FETCH_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: FETCH_ERROR, payload: err.response}))
};

export const addRequest = () => dispatch => {
    e.preventDefault();
    dispatch({ type: ADD_REQUEST, payload: e.target})
    axiosWithAuth()
        .post('/api/requests', this.state.requestToAdd)
        .then(res => {
        console.log(res);
        this.props.history.push('/requests');
      })
      .catch(err => console.log(err.response));
  };

export const deleteRequest = id => dispatch => {
    dispatch({type: DELETE_REQUEST, payload: id})
    axiosWithAuth()
        .delete(`/requests/${id}`)
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
    axiosWithAuth()
        .put(`http://localhost:3000/requests/${e.target.id}`, {
            username: e.target.editusername.value,
            name: e.target.editname.value,
            phonenumber: e.target.editphonenumber.value,
        })
        .then(res => dispatch({type: FETCH_SUCCESS, payload: res.data}))
        .catch(err =>dispatch({type: FETCH_ERROR, payload: err.response}))
};