import { useLocation } from "react-router-dom";
import Layout from "../layout";

const Dashboard = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const layout = params.get("layout");
  return <Layout layout={layout}></Layout>;
};

export default Dashboard;
