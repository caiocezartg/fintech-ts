import Header from './components/Header'
import Sidenav from './components/Sidenav'
import { DataContextProvider } from './context/DataContext'
import Resumo from './pages/Resumo'
import './style.css'

function App() {

  return (
    <>
      <DataContextProvider>
        <Sidenav />
        <main>
          <Header />
          <Resumo />
        </main>
      </DataContextProvider>
    </>
  )
}

export default App
