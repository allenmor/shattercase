import Signup from "./components/Signup";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Signup />
      </AuthProvider>

    </div>
  );
}

export default App;
