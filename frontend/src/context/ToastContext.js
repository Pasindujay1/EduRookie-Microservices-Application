import { createContext, useMemo } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastContext = createContext();

export const ToastContextProvider = ({ children }) => {
  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({ toast }), []);

  return (
    <ToastContext.Provider value={contextValue}>
      <ToastContainer autoClose={2000} />
      {children}
    </ToastContext.Provider>
  );
};

// Define prop types for the ToastContextProvider component
ToastContextProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children is a React node and required
};

export default ToastContext;
