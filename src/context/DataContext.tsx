import { createContext } from "react";
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
};

export const DataContext = createContext({} as IDataContext);

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const { data, loading, error } = useFetch<IVenda[]>(
    "https://data.origamid.dev/vendas/"
  );

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};
