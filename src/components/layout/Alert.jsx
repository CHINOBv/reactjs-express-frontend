import React from "react";

const Alert = ({ msg }) => {
  return (
    <div
      className="alert alert-success alert-dismissible fade show"
      role="alert"
    >
      {msg}
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">×</span>
      </button>
    </div>
  );
};

export default Alert;
