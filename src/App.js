import "./App.css";
import Dashboard from "./components/Dashboard/MainDashboard";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Dashboard />
      </div>
    </Router>
  );
}

export default App;
