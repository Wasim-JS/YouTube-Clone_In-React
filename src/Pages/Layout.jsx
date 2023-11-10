import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <SideBar />
      {children}
    </>
  );
};

export default Layout;
