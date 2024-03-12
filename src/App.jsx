
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'

function App() {


  return (
    <>

      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        Footer
      </footer>

    </>
  )
}

export default App
