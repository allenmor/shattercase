import { AuthProvider } from "./contexts/AuthContext";
import { Routes, Route } from "react-router-dom";
import Iphone11 from "./components/cases/iphone/Iphone11";
import BusinessCard from "./components/BusinessCard";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<BusinessCard />} />
          <Route path="/iphone" element={<Iphone11 />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
