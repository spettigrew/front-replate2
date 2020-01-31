import React from "react";
import { connect } from "react-redux";
import { beginEdit, submitEdit } from '../utils/actions'

function RequestsCard(props) {
  if (!props.isEditing) {
    return (
        <>
        <h1>Business Request Form</h1>
        <div className= "request-card">
            <h2>{"New Pending Request"}</h2>
            <p>Name: {"Business Name"}</p>
            <p>Address: {"Business Address"}</p>
            <p>Phone Number: {"Business Phone"}</p>
            <p>Email: {"business@email.com"}</p>
            <button onClick={() => props.deleteRequest("props.item.id")}>
            Remove request
            </button>
            <button onClick={() => props.beginEdit()} >Edit Request</button>
            </div>
      </>
    );
  } else {
    return (
      <form id={"props.item.id"} onSubmit={props.submitEdit}>
        <label htmlFor="editusername">
          {""}
          Username:
          <input type="text" name="editusername" htmlFor="editusername" />
        </label>
        <label htmlFor="editname">
        Name:
          <input type="text" name="editname" htmlFor="editname" />
        </label>
        <label htmlFor="editaddress">
          Address:
          <input type="text" name="editaddress" htmlFor="editaddress" />
        </label>
        <label htmlFor="editphonenumber">
          Phone Number:
          <input type="text" name="editphonenumber" htmlFor="editphonenumber" />
        </label>
        <label htmlFor="editemail">
          Email:
          <input type="email" name="editemail" htmlFor="editemail" />
        </label>
        
        <button type="submit">Submit Edit</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    isEditing: state.isEditing
  };
};

export default connect(
  mapStateToProps,
  { beginEdit, submitEdit }
)(RequestsCard);