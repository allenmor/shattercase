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
import Iphone11Pro from "./components/cases/iphone/Iphone11Pro";
import Iphone11ProMax from "./components/cases/iphone/Iphone11ProMax";
import Iphone12Mini from "./components/cases/iphone/Iphone12Mini";
import Iphone12 from "./components/cases/iphone/Iphone12";
import Iphone12ProMax from "./components/cases/iphone/Iphone12ProMax";
import Iphone13Mini from "./components/cases/iphone/Iphone13Mini";
import Iphone13 from "./components/cases/iphone/Iphone13";
import Iphone13ProMax from "./components/cases/iphone/Iphone13ProMax";
import Iphone14 from "./components/cases/iphone/Iphone14";
import Iphone14Plus from "./components/cases/iphone/Iphone14Plus";
import Iphone14Pro from "./components/cases/iphone/Iphone14Pro";
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
          <Route path="/iphone11pro" element={<Iphone11Pro />} />
          <Route path="/iphone11promax" element={<Iphone11ProMax />} />
          <Route path="/iphone12mini" element={<Iphone12Mini />} />
          <Route path="/iphone12" element={<Iphone12 />} />
          <Route path="/iphone12promax" element={<Iphone12ProMax />} />
          <Route path="/iphone13mini" element={<Iphone13Mini />} />
          <Route path="/iphone13" element={<Iphone13 />} />
          <Route path="/iphone13" element={<Iphone13 />} />
          <Route path="/iphone13promax" element={<Iphone13ProMax />} />
          <Route path="/iphone14" element={<Iphone14 />} />
          <Route path="/iphone14plus" element={<Iphone14Plus />} />
          <Route path="/iphone14pro" element={<Iphone14Pro />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
