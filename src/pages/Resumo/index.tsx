import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

const Resumo = () => {
  const { data } = useContext(DataContext);

  if (!data) return null;

  return (
    <section>
      <div className="resumo flex mb">
        <div className="box">
          <h2>Vendas</h2>
          <span>
            {data
              .filter((item) => item.status !== "falha")
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
          </span>
        </div>

        <div className="box">
          <h2>Recebido</h2>
          <span>
            {data
              .filter((item) => item.status === "pago")
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
          </span>
        </div>

        <div className="box">
          <h2>Processando</h2>
          <span>
            {data
              .filter((item) => item.status === "processando")
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
          </span>
        </div>
      </div>
      <div className="box mb">Gráficos</div>
    </section>
  );
};

export default Resumo;
