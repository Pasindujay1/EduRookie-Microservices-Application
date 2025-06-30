import { createContext, useContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const CommonContext = createContext();

export const CommonContextProvider = ({ children }) => {
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const [selectedCompanyId, setSelectedCompanyId] = useState(null);
  const [isEnrolled, setIsEnrolled] = useState(false);

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      selectedCourseId,
      setSelectedCourseId,
      isEnrolled,
      setIsEnrolled,
      selectedCompanyId,
      setSelectedCompanyId,
    }),
    [selectedCourseId, isEnrolled, selectedCompanyId]
  );

  return (
    <CommonContext.Provider value={contextValue}>
      {children}
    </CommonContext.Provider>
  );
};

// Define prop types for the CommonContextProvider component
CommonContextProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children is a React node and required
};

export default CommonContext;
