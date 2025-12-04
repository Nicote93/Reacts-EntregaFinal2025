import Carrito from "./components/Carrito";
import Header from "./components/Header";
import Inicio from "./pages/Inicio";
import AccesoriosCelulares from "./pages/AccesoriosCelulares";
import { Routes, Route } from "react-router-dom";
import ProductoDetalle from "./pages/ProductoDetalle";
import RutaProtegida from "./components/RutaProtegida";
import Admin from "./pages/Admin";
import Footer from "./components/Footer";
import Computacion from "./pages/Computacion";
import Login from "./pages/Login";
import ResultadosBusqueda from "./components/ResultadosBusqueda";

function App() {
  return (
    <div className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/accesorioscelulares" element={<AccesoriosCelulares />} />
        <Route path="/computacion" element={<Computacion />} />
        <Route path="/login" element={<Login />} />
        <Route path="/busqueda" element={<ResultadosBusqueda />} />
        <Route path="/productos/:id" element={<ProductoDetalle />} />
        <Route
          path="/carrito"
          element={
            <RutaProtegida>
              <Carrito />
            </RutaProtegida>
          }
        />
        <Route
          path="/admin"
          element={
            <RutaProtegida>
              <Admin />
            </RutaProtegida>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;