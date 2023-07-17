
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function App() {
 
  return (
    <BrowserRouter>
      <div>
        <main>
          <Container className="mt-3">
            <Routes>
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/payment" element={<PaymentMethodScreen />}></Route>
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