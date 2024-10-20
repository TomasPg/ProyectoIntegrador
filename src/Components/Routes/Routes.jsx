
import { Routes, Route } from "react-router-dom"
import { RegistroGastos } from "../Gastos/Gastos"
import { Home } from "../Home/Home"
import { Categorias } from "../Categorias/Categorias"
import { MetodoPagos } from "../MetodoPagos/MetodoPagos"

export function Rutas (){
    return (
        <div>
          <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/registrogastos" element={ <RegistroGastos/> } />
            <Route path="/categorias" element={ <Categorias/> } />
            <Route path="/metodopagos" element={ <MetodoPagos/> } />
          </Routes>
        </div>
      )
}