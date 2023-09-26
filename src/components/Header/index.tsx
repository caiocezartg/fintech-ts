import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

const Header = () => {
  const { data } = useContext(DataContext);

  return <div>Header</div>;
};

export default Header;
