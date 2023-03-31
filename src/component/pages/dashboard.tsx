import { useState } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../layout";

const Dashboard = () => {
  const [layout, setLayout] = useState("vertical");
  const search = window.location.href;
  let params = new URLSearchParams(search);
  // let layout = params.get("layout") || "horizontal";

  return (
    <div>
      <Layout layout={layout} setLayout={setLayout}></Layout>
    </div>
  );
};

export default Dashboard;
