import Signup from "./components/Signup";
import { AuthProvider } from "./contexts/AuthContext";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile";
import Cases from "./components/Cases";
import Iphone11 from "./components/cases/iphone/Iphone11";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          {/* <PrivateRoute exact path="/" element={<Dashboard />}/> */}
          <Route
            exact
            path="/"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/update-profile"
            element={
              <PrivateRoute>
                <UpdateProfile />
              </PrivateRoute>
            }
          ></Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/iphone11" element={<Iphone11 />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
