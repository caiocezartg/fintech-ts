import { useState } from "react";
import DataRange from "../DateRange";
import Months from "../Months";

const Header = () => {
  const [title, setTitle] = useState("Resumo");

  return (
    <header className="mb">
      <div className="daterange mb">
        <DataRange />
        <h1 className="box bg-3">{title}</h1>
      </div>
      <Months />
    </header>
  );
};

export default Header;
