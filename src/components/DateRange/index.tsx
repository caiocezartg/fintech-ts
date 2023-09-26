import { useContext } from "react";
import DateInput from "../DateInput";
import { DataContext } from "../../context/DataContext";

const DataRange = () => {
  const { inicio, setInicio, final, setFinal } = useContext(DataContext);

  return (
    <form onSubmit={(e) => e.preventDefault()} className="box flex">
      <DateInput
        label="Início"
        value={inicio}
        onChange={({ target }) => setInicio(target.value)}
      />
      <DateInput
        label="Final"
        value={final}
        onChange={({ target }) => setFinal(target.value)}
      />
    </form>
  );
};

export default DataRange;
