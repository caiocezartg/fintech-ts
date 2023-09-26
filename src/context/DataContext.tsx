import { createContext, useState } from "react";
import useFetch from "../hooks/useFetch";

type IVenda = {
  id: string;
  nome: string;
  preço: number;
  status: "pago" | "processando" | "falha";
  pagamento: "boleto" | "pix" | "cartao";
  data: string;
  parcelas: number | null;
};

type IDataContext = {
  loading: boolean;
  error: string | null;
  data: IVenda[] | null;
  inicio: string;
  final: string;
  setInicio: React.Dispatch<React.SetStateAction<string>>;
  setFinal: React.Dispatch<React.SetStateAction<string>>;
};

export const DataContext = createContext({} as IDataContext);

const getDate = (initialDate: number) => {
  const date = new Date();
  date.setDate(date.getDate() - initialDate);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear());

  const fullDate = `${year}-${month}-${day}`;

  return fullDate;
};

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const [inicio, setInicio] = useState(getDate(14));
  const [final, setFinal] = useState(getDate(0));

  const { data, loading, error } = useFetch<IVenda[]>(
    `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`
  );

  return (
    <DataContext.Provider
      value={{ data, loading, error, inicio, setInicio, final, setFinal }}
    >
      {children}
    </DataContext.Provider>
  );
};
