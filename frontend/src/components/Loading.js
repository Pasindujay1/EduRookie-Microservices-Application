import React from "react";
import PropTypes from "prop-types"; // Import PropTypes

//Loading functional component
const Loading = ({ text }) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div>
        <div className="spinner-border text-primary"></div>
        <output className="sr-only">{text}...</output>
      </div>
    </div>
  );
};

// Define prop types for the Loading component
Loading.propTypes = {
  text: PropTypes.string.isRequired, // Validate that text is a required string
};

// Export the Loading component as the default export
export default Loading;
