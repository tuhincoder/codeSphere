
import { Outlet } from 'react-router-dom'
import './App.css'
import MainLayout from './layout/MainLayout'

function App() {


  return (
    <>
      <MainLayout>
        <Outlet></Outlet>
      </MainLayout>
    </>
  )
}

export default App
