import {
 GET_REQUESTS,
 SET_LOADING,
 REQUESTS_ERROR,
 ADD_REQUEST,
 DELETE_REQUEST,
 SET_CURRENT,
 CLEAR_CURRENT,
 UPDATE_REQUEST,
 SEARCH_REQUESTS
} from "./types";

export const getRequests = () => async dispatch => {
 try {
  setLoading();

  const res = await fetch("/requests");
  const data = await res.json();

  dispatch({
   type: GET_REQUESTS,
   payload: data
  });
 } catch (err) {
  dispatch({
   type: REQUESTS_ERROR,
   payload: err.response.statusText
  });
 }
};

// Add(POST) new REQUEST
export const addRequest = request => async dispatch => {
 try {
  setLoading();

  const res = await fetch("/requests", {
   method: "POST",
   body: JSON.stringify(request),
   headers: {
    "Content-Type": "application/json"
   }
  });
  const data = await res.json();

  dispatch({
   type: ADD_REQUEST,
   payload: data
  });
 } catch (err) {
  console.REQUEST(err.response.statusText);
  dispatch({
   type: REQUESTS_ERROR,
   payload: err.response.statusText
  });
 }
};

// Delete REQUEST from server
export const deleteRequest = id => async dispatch => {
 try {
  setLoading();

  await fetch(`/requests/${id}`, {
   method: "DELETE"
  });

  dispatch({
   type: DELETE_REQUEST,
   payload: id
  });
 } catch (err) {
  dispatch({
   type: REQUESTS_ERROR,
   payload: err.response.statusText
  });
 }
};

// Update REQUEST on server
export const updateRequest = request => async dispatch => {
 try {
  setLoading();

  const res = await fetch(`/requests/${request.id}`, {
   method: "PUT",
   body: JSON.stringify(request),
   headers: {
    "Content-Type": "application/json"
   }
  });
  const data = await res.json();

  dispatch({
   type: UPDATE_REQUEST,
   payload: data
  });
 } catch (err) {
  dispatch({
   type: REQUESTS_ERROR,
   payload: err.response.statusText
  });
 }
};

// Search REQUESTs
export const searchRequests = text => async dispatch => {
 try {
  setLoading();

  const res = await fetch(`/requests?q=${text}`);
  const data = await res.json();

  dispatch({
   type: SEARCH_REQUESTS,
   payload: data
  });
 } catch (err) {
  dispatch({
   type: REQUESTS_ERROR,
   payload: err.response.statusText
  });
 }
};

// Set current REQUEST
export const setCurrent = request => {
 return {
  type: SET_CURRENT,
  payload: request
 };
};

// Clear current REQUEST
export const clearCurrent = () => {
 return {
  type: CLEAR_CURRENT
 };
};

// set loading to true
export const setLoading = () => {
 return {
  type: SET_LOADING
 };
};
