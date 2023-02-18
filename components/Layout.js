import Navbar from "./Navbar";
import Box from "@mui/material/Box";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box my={3}>
        <main>{children}</main>
      </Box>
    </>
  );
};

export default Layout;
