/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import Cabecalho from "./components/Cabecalho";


export default function App() {
  return (
  <>

    <Cabecalho />
    <Outlet />

  </>
  )
}
