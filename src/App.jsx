import { Outlet } from 'react-router-dom'
import Nav from './components/Nav'

function App () {
  return (
    <main className='font-mono w-screen h-screen bg-slate-700 p-5 sm:p-0 overflow-auto'>
      <Nav />
      <Outlet />
    </main>
  )
}

export default App
