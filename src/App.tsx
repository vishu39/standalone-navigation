import "./App.css";
import { ConfigProvider } from "antd";
import Dashboard from "./component/pages/dashboard";

function App() {
  return (
    <ConfigProvider>
      <Dashboard />
    </ConfigProvider>
  );
}

export default App;
