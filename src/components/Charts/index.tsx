import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { IVenda } from "../../context/DataContext";

type VendaDia = {
  data: string;
  pago: number;
  falha: number;
  processando: number;
};

const transformStats = (data: IVenda[]): VendaDia[] => {
  const days = data.reduce((acc: { [key: string]: VendaDia }, item) => {
    const day = item.data.split(" ")[0];

    if (!acc[day]) {
      acc[day] = {
        data: day,
        pago: 0,
        falha: 0,
        processando: 0,
      };
    }

    acc[day][item.status] += item.preco;

    return acc;
  }, {});

  return Object.values(days).map((day) => ({
    ...day,
    data: day.data.substring(5),
  }));
};

const Charts = ({ stats }: { stats: IVenda[] }) => {
  const statsChart = transformStats(stats);

  return (
    <ResponsiveContainer height={400} width="99%">
      <LineChart data={statsChart}>
        <XAxis dataKey="data" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pago" stroke="#A36AF9" strokeWidth={3} />
        <Line
          type="monotone"
          dataKey="processando"
          stroke="#FBCB21"
          strokeWidth={3}
        />
        <Line
          type="monotone"
          dataKey="falha"
          stroke="#000000"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Charts;
