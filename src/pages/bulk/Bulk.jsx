import { useNavigate } from "react-router-dom";

export const Bulk = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Add Bulk Measurements</h1>
      <div>
        <button onClick={() => navigate("data-received")}>Submit</button>
      </div>
    </>
  );
};

export default Bulk;
