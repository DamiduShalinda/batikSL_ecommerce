
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import SignupScreen from "./screens/SignupScreen";
import SigninScreen from "./screens/SigninScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";


function App() {
 
  return (
    <BrowserRouter>
      <div>
        <main>
          <Container className="mt-3">
            <Routes>
             {/* add here */}
             <Route path="/signup" element={<SignupScreen />} />
             <Route path="/signin" element={<SigninScreen />} />
             <Route
                path="/admin/users"
                element={
                  <AdminRoute>
                    <UserListScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/user/:id"
                element={
                  <AdminRoute>
                    <UserEditScreen />
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