
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import MapScreen from "./screens/MapScreen";
import OrderListScreen from "./screens/OrderListScreen";
import OrderScreen from "./screens/OrderScreen";


function App() {
 
  return (
    <BrowserRouter>
      <div>
        <main>
          <Container className="mt-3">
            <Routes>
             {<Route
                path="/map"
                element={
                  <ProtectedRoute>
                    <MapScreen />
                  </ProtectedRoute>
                }
/>

}

<Route
                path="/admin/orders"
                element={
                  <AdminRoute>
                    <OrderListScreen />
                  </AdminRoute>
                }
              ></Route>

<Route
                path="/order/:id"
                element={
                  <ProtectedRoute>
                    <OrderScreen />
                  </ProtectedRoute>
                }
              ></Route>

            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;