import { Button } from "antd";

const Content = ({ props }: any) => {
  const { layout, setLayout } = props;
  return (
    <div style={{ padding: "24px" }}>
      <Button
        onClick={() => {
          if (layout === "horizontal") setLayout("vertical");
          else if (layout === "vertical") setLayout("horizontal");
        }}
      >
        Toggle
      </Button>
    </div>
  );
};

export default Content;
