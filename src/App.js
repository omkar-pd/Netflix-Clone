import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { AuthContextProvider } from "./Context/AuthContext";
function App() {
  return (
    <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />}></Route>
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
