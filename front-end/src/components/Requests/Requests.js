import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchRequests, deleteRequest } from "../../utils/actions";
import RequestsCard from "../Requests/RequestsCard";

function Requests(props) {
 useEffect(() => props.fetchRequests(), []);
 return (
  (
   <div>
    <button onClick={props.fetchRequests}>Get Requests</button>
    {props.isFetching && <h2>Loading Requests...</h2>}
    {props.requests.length > 0 &&
     props.requests.map(item => (
      <RequestsCard item={item} deleteRequest={props.deleteRequest} />
     ))}
   </div>
  ),
  []
 );
}

const mapStateToProps = state => {
 return {
  isFetching: state.isFetching,
  error: state.error,
  requests: state.requests
 };
};

export default connect(mapStateToProps, { fetchRequests, deleteRequest })(
 Requests
);
