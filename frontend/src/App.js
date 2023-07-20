
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import MapScreen from "./screens/MapScreen";
import OrderListScreen from "./screens/OrderListScreen";



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