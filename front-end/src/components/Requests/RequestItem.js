import React from "react";
import { connect } from "react-redux";
import { deleteRequest, setCurrent } from "../../utils/actions";

const RequestItem = ({ request, deleteRequest, setCurrent }) => {
 const onDelete = () => {
  deleteRequest(request.id);
 };
 return (
  <li className="collection-item">
   <div>
    <p
     className={`modal-trigger ${request.attention ? "red-text" : "blue-text"}`}
     onClick={() => setCurrent(request)}
    >
     {request.message}
    </p>
    <br />
    <span className="grey-text">
     <span className="black-text">Request #{request.id}</span> last updated by{" "}
     <span className="black-text">{request.business}</span> on{" "}
    </span>
    <a href="#!" className="secondary-content">
     <i className="material-icons grey-text" onClick={onDelete}>
      delete
     </i>
    </a>
   </div>
  </li>
 );
};

export default connect(null, { deleteRequest, setCurrent })(RequestItem);
