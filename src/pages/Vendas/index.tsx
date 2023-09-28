import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import VendaItem from "../../components/VendaItem";

const Vendas = () => {
  const { data } = useContext(DataContext);

  if (!data) return null;

  return (
    <ul>
      {data.map((venda) => (
        <li key={venda.id}>
          <VendaItem venda={venda} />
        </li>
      ))}
    </ul>
  );
};

export default Vendas;
