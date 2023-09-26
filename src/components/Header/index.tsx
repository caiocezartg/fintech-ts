import DataRange from "../DateRange";
import Months from "../Months";

const Header = () => {
  return (
    <header className="mb">
      <div className="mb">
        <DataRange />
      </div>
      <Months />
    </header>
  );
};

export default Header;
