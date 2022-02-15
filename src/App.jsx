import { Outlet } from 'react-router-dom'
import Nav from './components/Nav'
import PkProvider from './context/PkContext'

function App () {
  return (
    <main className='font-mono w-screen h-screen bg-slate-700 p-5 sm:p-0 overflow-auto'>
      <PkProvider>
        <Nav />
        <Outlet />
      </PkProvider>
    </main>
  )
}

export default App
