import DataRange from "./components/DateRange";
import Header from "./components/Header";
import Sidenav from "./components/Sidenav";
import { DataContextProvider } from "./context/DataContext";
import Resumo from "./pages/Resumo";
import "./style.css";

function App() {
  return (
    <>
      <DataContextProvider>
        <div className="container">
          <Sidenav />
          <main>
            <Header />
            <Resumo />
            <DataRange />
          </main>
        </div>
      </DataContextProvider>
    </>
  );
}

export default App;
