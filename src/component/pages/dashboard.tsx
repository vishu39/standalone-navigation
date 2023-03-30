import { useLocation } from "react-router-dom";
import Layout from "../layout";

const Dashboard = () => {
  const search = window.location.href;
  let params = new URLSearchParams(search);
  let layout = params.get("layout") || "horizontal";

  return (
    <div>
      <Layout layout={layout}></Layout>
    </div>
  );
};

export default Dashboard;
