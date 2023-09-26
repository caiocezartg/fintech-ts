import Header from './components/Header'
import Sidenav from './components/Sidenav'
import Resumo from './pages/Resumo'
import './style.css'

function App() {

  return (
    <>
      <Sidenav />
      <main>
        <Header />
        <Resumo />
      </main>
    </>
  )
}

export default App
