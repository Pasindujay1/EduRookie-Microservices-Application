import { useContext } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import Navbar from "./Navbar";
import AuthContext from "../context/AuthContext";
import Footer from "./Footer";

//layout functional component
const Layout = ({ children }) => {
  const { user } = useContext(AuthContext);
  //Render layout component
  return (
    <>
      {user && (
        <div style={{ marginBottom: "100px" }}>
          <Navbar />
        </div>
      )}
      <div
        className="container "
        style={{ fontFamily: "poppins", marginBottom: "100px" }}
      >
        {children}
      </div>
      {user && (
        <div className="m-0">
          <Footer />
        </div>
      )}
    </>
  );
};

// Define prop types for the Layout component
Layout.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children is a React node and required
};

// Export the Layout component as the default export
export default Layout;
