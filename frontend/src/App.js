import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "./App.css";
import SearchScreen from "./screens/SearchScreen";

function App() {
  return (
    <div className="App">
      <main>
        <Container className="mt-3">
          <Routes>
            <Route path="/search" element={<SearchScreen />} />
          </Routes>
        </Container>
      </main>
    </div>
  );
}

export default App;
