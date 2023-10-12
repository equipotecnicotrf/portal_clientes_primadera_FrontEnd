import { Route, Routes } from "react-router-dom"
import DataTablePerfilUser from '../pages-usuario/PerfilUsuario';
import HomePage from "../../primadera-clientes/pages/HomePage";
import DataInventario from "../pages-usuario/InventarioUser";


const UsuarioRoutes = () => {
    return (
      <>
      <Routes>
          
          <Route path="HomePage" element={ <HomePage/> } />
          <Route path="DataTablePerfilUser" element={ <DataTablePerfilUser /> } />
          <Route path="DataInventario" element={ <DataInventario /> } />
          
        </Routes>
      </>
    )
  }
  
export default UsuarioRoutes;