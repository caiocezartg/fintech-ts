import { CSSProperties, useContext } from "react";
import { DataContext } from "../../context/DataContext";

const buttonCSS: CSSProperties = {
  padding: "var(--gap-md) var(--gap-sm)",
  backgroundColor: "var(--color-3)",
  border: "none",
  borderRadius: "var(--gap-md)",
  color: "var(--color-2)",
  fontWeight: "600",
  textTransform: "capitalize",
};

const getNameMonth = (n: number) => {
  const date = new Date();

  date.setMonth(date.getMonth() + n);

  const name = new Intl.DateTimeFormat("pt-BR", {
    month: "long",
  }).format(date);

  return name;
};

const formatDate = (date: Date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear());

  const fullDate = `${year}-${month}-${day}`;

  return fullDate;
};

const MonthButton = ({ month }: { month: number }) => {
  const { setInicio, setFinal } = useContext(DataContext);

  const setMonth = (n: number) => {
    const date = new Date();
    date.setMonth(date.getMonth() + n);

    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    // Inicialmente pega o próximo mês, porém com o valor 0 setado pro dia, logo ele pega um dia anterior do começo do próximo mês, sendo este dia, o final do mês atual.
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    setInicio(formatDate(firstDay));
    setFinal(formatDate(lastDay));
  };

  return (
    <button style={buttonCSS} onClick={() => setMonth(month)}>
      {getNameMonth(month)}
    </button>
  );
};

export default MonthButton;
